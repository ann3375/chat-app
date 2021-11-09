import React from 'react';
import { Label } from '../../atoms/Label';
import { InputId, InputType } from '../FormInput/types/types';
import { IconName } from '../../atoms/Icon/types/types';
import { Icon } from '../../atoms/Icon';
import { Wrapper } from '../../atoms/Wrapper';

import './fileInput.scss';

interface IFileInput {
  id: InputId;
  field: {
    name: string;
    onBlur: () => void;
    onChange: (e: File) => void;
    value: { filename: string };
  };
}

export const FileInput: React.FC<IFileInput> = ({ id, field }): React.ReactElement => {
  return (
    <Wrapper className="file-input">
      <Label htmlFor={InputId.files} className="file-input__label">
        <Icon name={IconName.addFile} className="file-input__icon" />
        <input
          type={InputType.file}
          id={id}
          {...field}
          value={field.value.filename}
          onChange={(event) => {
            return event.target.files?.length && field.onChange(event.target.files[0]);
          }}
        />
      </Label>
    </Wrapper>
  );
};
