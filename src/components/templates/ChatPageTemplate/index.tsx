import React from 'react';
import { useHistory } from 'react-router';
import Wrapper from '../../atoms/Wrapper';
import MainContainer from '../MainContainer';
import { Pages } from '../../../router/endpoints';
import { useWindowSize } from '../../../hooks/useWindowSize';

import './chatPageTemplate.scss';
import { WindowSize } from '../../../hooks/constants';

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
}): React.ReactElement | null => {
  const path = useHistory();
  const pathArr = path.location.pathname.split('/');

  const size = useWindowSize();

  return (
    <MainContainer page={Pages.chat}>
      {(size.width > WindowSize.SIZE_MOBILE_L || pathArr.length == 2) && header}

      <main className="chat-page__inner">
        {(size.width > WindowSize.SIZE_MOBILE_L || pathArr.length == 2) && userList}

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
