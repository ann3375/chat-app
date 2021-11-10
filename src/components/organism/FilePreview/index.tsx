import React from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../../molecules/ButtonIcon';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { ButtonType } from '../../atoms/Button/types/types';
import { IUseFileReader } from '../../../hooks/useFileReader';
import { SUPPORTED_FORMATS } from '../MessageForm/constants/constants';

import './filePreview.scss';

interface IFilePreview {
  handleDeleteFile: () => void;
  fileState: IUseFileReader;
}

export const FilePreview: React.FC<IFilePreview> = ({ fileState, handleDeleteFile }) => {
  const { isVisiblePreviewFile, fileInfo, handleSetIsVisiblePreview } = fileState;

  return (
    <Wrapper
      className={classNames('preview', {
        preview_active: isVisiblePreviewFile,
      })}
    >
      <Wrapper className="preview__wrapper" flex>
        {SUPPORTED_FORMATS.VIDEO.includes(fileInfo.type) && (
          <Wrapper className="preview__video">
            <video controls>
              <source src={fileInfo.src} type={fileInfo.type}></source>
            </video>
          </Wrapper>
        )}

        {SUPPORTED_FORMATS.IMAGE.includes(fileInfo.type) && (
          <Wrapper className="preview__image">
            <img src={fileInfo.src} />
          </Wrapper>
        )}

        {SUPPORTED_FORMATS.AUDIO.includes(fileInfo.type) && (
          <Wrapper className="preview__audio">
            <audio controls>
              <source src={fileInfo.src} type={fileInfo.type} />
            </audio>
          </Wrapper>
        )}

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
            onClick={handleDeleteFile}
          />
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};
