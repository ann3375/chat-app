import React, { useState } from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { Typography } from '../../atoms/Typography';
import { Spinner } from '../Spinner';
import { FileInfoType } from '../../../hooks/useFileReader';
import { truncateFileName } from '../../../utils/truncateFileName';
import { convertFileSize } from '../../../utils/covertFileSize';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';

import './imageBlock.scss';

interface iImageBlock {
  file: FileInfoType;
  className?: string;
}

export const ImageBlock: React.FC<iImageBlock> = ({ file, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const classProps = classNames('image-block', {
    [`${className}`]: className,
  });

  return (
    <Wrapper className={classProps}>
      {!isLoaded ? (
        <Wrapper className="image-block__spinner">
          <Spinner />
        </Wrapper>
      ) : (
        <Wrapper flex align="center">
          <Typography className="image-block__filename" variant={TypographyTypeStyle.h4}>
            {truncateFileName(file.fileName)}
          </Typography>
          <Typography className="image-block__size" variant={TypographyTypeStyle.p3}>
            {convertFileSize(file.fileSize)}
          </Typography>
        </Wrapper>
      )}

      <img className="image-block__image" src={file.fileLink} onLoad={() => setIsLoaded(true)} />
    </Wrapper>
  );
};
