import React, { useState } from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { Spinner } from '../Spinner';
import { FileInfoType } from '../../../hooks/useFileReader';

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
      <img className="image-block__image" src={file.fileLink} onLoad={() => setIsLoaded(true)} />
      {!isLoaded && (
        <Wrapper className="image-block__spinner">
          <Spinner />
        </Wrapper>
      )}
    </Wrapper>
  );
};
