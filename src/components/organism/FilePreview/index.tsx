import React from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../../molecules/ButtonIcon';
import { ImageBlock } from '../../molecules/ImageBlock';
import { VideoBlock } from '../../molecules/VideoBlock';
import { AudioBlock } from '../../molecules/AudioBlock';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { ButtonType } from '../../atoms/Button/types/types';
import { IUseFileReader } from '../../../hooks/useFileReader';
import { SUPPORTED_FORMATS } from '../MessageForm/constants/constants';

import './filePreview.scss';
import { FileBlock } from '../../molecules/FileBlock';

interface IFilePreview {
  handleDeletePreviewFile: () => void;
  previewFileState: IUseFileReader;
}

export const FilePreview: React.FC<IFilePreview> = ({
  previewFileState,
  handleDeletePreviewFile,
}) => {
  const { isVisiblePreviewFile, fileInfo, handleSetIsVisiblePreview } = previewFileState;

  return (
    <Wrapper
      className={classNames('preview', {
        preview_active: isVisiblePreviewFile,
      })}
    >
      <Wrapper className="preview__wrapper" flex>
        {SUPPORTED_FORMATS.VIDEO.includes(fileInfo.fileType) && (
          <VideoBlock className="preview__video" file={fileInfo} />
        )}

        {SUPPORTED_FORMATS.IMAGE.includes(fileInfo.fileType) && (
          <ImageBlock className="preview__image" file={fileInfo} />
        )}

        {SUPPORTED_FORMATS.AUDIO.includes(fileInfo.fileType) && (
          <AudioBlock className="preview__audio" file={fileInfo} />
        )}

        {/* <FileBlock file={fileInfo} className="preview__file" /> */}

        <Wrapper className="preview__buttons">
          <ButtonIcon
            className={'preview__button'}
            type={ButtonType.button}
            iconName={IconName.closeCircleIcon}
            color={ColorType.primary}
            onClick={handleSetIsVisiblePreview}
          />

          <ButtonIcon
            className={'preview__button'}
            type={ButtonType.button}
            iconName={IconName.deleteIcon}
            color={ColorType.error}
            onClick={handleDeletePreviewFile}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
