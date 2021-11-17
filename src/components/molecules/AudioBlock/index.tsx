import React from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { FileInfoType } from '../../../hooks/useFileReader';

import './audioBlock.scss';

interface iAudioBlock {
  file: FileInfoType;
  className?: string;
}

export const AudioBlock: React.FC<iAudioBlock> = ({ className, file }) => {
  const classProps = classNames('audio-block', {
    [`${className}`]: className,
  });

  return (
    <Wrapper className={classProps}>
      <audio controls className="audio-block__audio">
        <source src={file.fileLink} type={file.fileType} />
      </audio>
    </Wrapper>
  );
};
