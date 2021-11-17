import React from 'react';
import classNames from 'classnames';
import { Wrapper } from '../../atoms/Wrapper';
import { ImageBlock } from '../ImageBlock';
import { VideoBlock } from '../VideoBlock';
import { AudioBlock } from '../AudioBlock';
import { Typography } from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { MessageType } from '../../../store/types/types';
import { SUPPORTED_FORMATS } from '../../organism/MessageForm/constants/constants';

import './dialogMessage.scss';

interface IDialogMessage {
  isCurrentUserMessage: boolean;
  message: MessageType;
}

export const DialogMessage: React.FC<IDialogMessage> = ({ isCurrentUserMessage, message }) => {
  const classProps = classNames('message', {
    ['message_side_left']: !isCurrentUserMessage,
    ['message_side_right']: isCurrentUserMessage,
  });

  const { text: messageText, file } = message;
  return (
    <Wrapper className={classProps}>
      {messageText && <Typography variant={TypographyTypeStyle.p1}>{messageText}</Typography>}

      {file && (
        <>
          {SUPPORTED_FORMATS.IMAGE.includes(file.fileType) && <ImageBlock file={file} />}
          {SUPPORTED_FORMATS.VIDEO.includes(file.fileType) && <VideoBlock file={file} />}
          {SUPPORTED_FORMATS.AUDIO.includes(file.fileType) && <AudioBlock file={file} />}
        </>
      )}
    </Wrapper>
  );
};
