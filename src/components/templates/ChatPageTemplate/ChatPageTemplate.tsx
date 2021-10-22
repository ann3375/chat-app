import React from 'react';
import { useHistory } from 'react-router';
import Wrapper from '../../atoms/Wrapper';
import MainContainer from '../MainContainer';
import { Pages } from '../../../router/constants';

import './chatPageTemplate.scss';
import Button from '../../atoms/Button';
import { ButtonType, ButtonVariant } from '../../atoms/Button/types/types';

interface IChatPageTemplate {
  header?: React.ReactElement;
  userList?: React.ReactElement;
  statusBar?: React.ReactElement;
  dialog?: React.ReactElement;
  messageForm?: React.ReactElement;
}

const ChatPageTemplate: React.FC<IChatPageTemplate> = ({
  header,
  userList,
  statusBar,
  dialog,
  messageForm,
}): React.ReactElement => {
  const path = useHistory();
  const pathArr = path.location.pathname.split('/');

  return (
    <MainContainer flex column page={Pages.chat}>
      {header}

      <Wrapper flex className="chat-container">
        {userList}

        <Wrapper className="dialog">
          {pathArr.length === 3 ? (
            <>
              {statusBar}

              {dialog}

              {messageForm}
            </>
          ) : (
            <Button
              variant={ButtonVariant.outline}
              className="button_notification"
              type={ButtonType.button}
            >
              Select a chat to stary messaging
            </Button>
          )}
        </Wrapper>
      </Wrapper>
    </MainContainer>
  );
};

export default ChatPageTemplate;
