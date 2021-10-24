import React from 'react';
import Input from '../../atoms/Input';
import Label from '../../atoms/Label';
import { InputId, InputType } from '../../atoms/Input/types/types';
import { IconName } from '../../atoms/Icon/types/types';

import './fileInput.scss';
import { Icon } from '../../atoms/Icon';
import Wrapper from '../../atoms/Wrapper';

interface IFileInput {
  id: InputId;
  isDisabled?: boolean;
}

const FileInput: React.FC<IFileInput> = ({ id, isDisabled }): React.ReactElement => {
  return (
    <Wrapper className="file-input">
      <Label htmlFor={InputId.file} className="file-input__label">
        <Icon name={IconName.addFile} className="file-input__icon" />
        <Input type={InputType.file} id={id} isDisabled={isDisabled} />
      </Label>
    </Wrapper>
  );
};

export default FileInput;
