import React from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { FileInfoType } from '../../../hooks/useFileReader';

import './videoBlock.scss';

interface iVideoBlock {
  file: FileInfoType;
  className?: string;
}

export const VideoBlock: React.FC<iVideoBlock> = ({ className, file }) => {
  const classProps = classNames('video-block', {
    [`${className}`]: className,
  });

  return (
    <Wrapper className={classProps}>
      <video controls className="video-block__video">
        <source src={file.fileLink} type={file.fileType} />
      </video>
    </Wrapper>
  );
};
