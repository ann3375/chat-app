import React from 'react';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import Icon from '../../atoms/Icon';
import { InputId, InputType } from '../../atoms/Input/types/types';
import { IconName } from '../../atoms/Icon/types/types';

import './fileInput.scss';

interface IFileInput {
  id: InputId;
}

const FileInput: React.FC<IFileInput> = ({ id }): React.ReactElement => {
  return (
    <Label htmlFor={InputId.file} className="file-input__label">
      <Icon name={IconName.addFile} />
      <Input type={InputType.file} id={id} />
    </Label>
  );
};

export default FileInput;
