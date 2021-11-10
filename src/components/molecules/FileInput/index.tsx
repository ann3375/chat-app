import React, { useEffect } from 'react';
import { Label } from '../../atoms/Label';
import { InputId, InputType } from '../FormInput/types/types';
import { IconName } from '../../atoms/Icon/types/types';
import { Icon } from '../../atoms/Icon';
import { Wrapper } from '../../atoms/Wrapper';
import { isFileValid } from '../../../utils/isFileValid';

import './fileInput.scss';

interface IFileInput {
  id: InputId;
  uniqueKey: number;
  errorText: string | undefined;
  field: {
    name: string;
    onBlur: () => void;
    onChange: (e: File) => void;
    value: { filename: string };
  };
  clearErrors: (field: string) => void;
  handleResetUniqueKey: () => void;
  handleDeleteFile: () => void;
  setFileState(file: File): void;
}

export const FileInput: React.FC<IFileInput> = ({
  id,
  field,
  uniqueKey,
  errorText,
  setFileState,
  handleDeleteFile,
  handleResetUniqueKey,
  clearErrors,
}): React.ReactElement => {
  useEffect(() => {
    if (errorText) {
      setTimeout(() => {
        handleResetUniqueKey();
        clearErrors('files');
      }, 3000);
    }
  }, [errorText, clearErrors, handleResetUniqueKey]);

  const handleFileInputChange = (event: { target: HTMLInputElement }) => {
    if (event.target.files?.length) {
      const file = event.target.files[0];

      isFileValid(file) ? setFileState(file) : handleDeleteFile();
      field.onChange(file);
    }
  };

  return (
    <Wrapper className="file-input">
      <Label htmlFor={InputId.files} className="file-input__label">
        <Icon name={IconName.addFile} className="file-input__icon" />
        <input
          type={InputType.file}
          key={uniqueKey}
          id={id}
          {...field}
          value={field.value.filename}
          onChange={(event) => {
            handleFileInputChange(event);
          }}
        />
      </Label>
      <Label errorText={errorText} className="file-input__label_error" />
    </Wrapper>
  );
};
