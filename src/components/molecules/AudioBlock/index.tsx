import React from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { Typography } from '../../atoms/Typography';
import { convertFileSize } from '../../../utils/covertFileSize';
import { truncateFileName } from '../../../utils/truncateFileName';
import { FileInfoType } from '../../../hooks/useFileReader';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

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
      <Typography className="audio-block__filename" variant={TypographyTypeStyle.h4}>
        {truncateFileName(file.fileName)}
      </Typography>
      <Wrapper className="audio-block__wrapper" flex align="center">
        <audio controls className="audio-block__audio">
          <source src={file.fileLink} type={file.fileType} />
        </audio>
        <Typography className="audio-block__size" variant={TypographyTypeStyle.p3}>
          {convertFileSize(file.fileSize)}
        </Typography>
      </Wrapper>
    </Wrapper>
  );
};
