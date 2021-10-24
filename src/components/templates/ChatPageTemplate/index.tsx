import React from 'react';
import { useHistory } from 'react-router';
import Wrapper from '../../atoms/Wrapper';
import MainContainer from '../MainContainer';
import { Pages, SCREENS } from '../../../router/endpoints';

import './chatPageTemplate.scss';
import { useWindowSize } from '../../../hooks/useWindowSize';

interface IChatPageTemplate {
  header?: React.ReactElement;
  userList?: React.ReactElement;
  statusBar?: React.ReactElement;
  dialog?: React.ReactElement;
  messageForm?: React.ReactElement;
  notificationButton?: React.ReactElement;
}

const ChatPageTemplate: React.FC<IChatPageTemplate> = ({
  header,
  userList,
  statusBar,
  dialog,
  messageForm,
  notificationButton,
}): React.ReactElement => {
  const path = useHistory();
  const pathArr = path.location.pathname.split('/');

  const size = useWindowSize();

  if (size.width && size.width <= 425) {
    return (
      <MainContainer page={Pages.chat}>
        {pathArr.length === 2 && header}

        <main className="chat-page__inner">
          {pathArr.length === 2 && userList}

          {pathArr.length === 3 && (
            <Wrapper className="chat-page__dialog">
              {statusBar}

              {dialog}

              {messageForm}
            </Wrapper>
          )}
        </main>
      </MainContainer>
    );
  }

  return (
    <MainContainer page={Pages.chat}>
      {header}

      <main className="chat-page__inner">
        {userList}

        <Wrapper className="chat-page__dialog">
          {pathArr.length === 3 ? (
            <>
              {statusBar}

              {dialog}

              {messageForm}
            </>
          ) : (
            notificationButton
          )}
        </Wrapper>
      </main>
    </MainContainer>
  );
};

export default ChatPageTemplate;
