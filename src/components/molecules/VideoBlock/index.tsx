import React, { useState } from 'react';
import classNames from 'classnames';
import { Typography } from '../../atoms/Typography';
import { Wrapper } from '../../atoms/Wrapper';
import { FileInfoType } from '../../../hooks/useFileReader';
import { truncateFileName } from '../../../utils/truncateFileName';
import { convertFileSize } from '../../../utils/covertFileSize';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

import './videoBlock.scss';

interface iVideoBlock {
  file: FileInfoType;
  className?: string;
}

export const VideoBlock: React.FC<iVideoBlock> = ({ className, file }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const classProps = classNames('video-block', {
    [`${className}`]: className,
  });

  return (
    <Wrapper className={classProps}>
      {isLoaded && (
        <Wrapper flex align="center">
          <Typography className="video-block__filename" variant={TypographyTypeStyle.h4}>
            {truncateFileName(file.fileName)}
          </Typography>
          <Typography className="video-block__size" variant={TypographyTypeStyle.p3}>
            {convertFileSize(file.fileSize)}
          </Typography>
        </Wrapper>
      )}
      <video controls className="video-block__video" onLoadedData={() => setIsLoaded(true)}>
        <source src={file.fileLink} type={file.fileType} />
      </video>
    </Wrapper>
  );
};
