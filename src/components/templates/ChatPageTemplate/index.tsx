import React from 'react';
import { useRouteMatch } from 'react-router';
import { Wrapper } from '../../atoms/Wrapper';
import { MainContainer } from '../MainContainer';
import { Pages, SCREENS } from '../../../router/endpoints';
import { useWindowSize } from '../../../hooks/useWindowSize';
import { WindowSize } from '../../../hooks/constants';

import './chatPageTemplate.scss';

interface IChatPageTemplate {
  header?: React.ReactElement;
  userList?: React.ReactElement;
  statusBar?: React.ReactElement;
  dialog?: React.ReactElement;
  messageForm?: React.ReactElement;
  notificationButton?: React.ReactElement;
}

export const ChatPageTemplate: React.FC<IChatPageTemplate> = ({
  header,
  userList,
  statusBar,
  dialog,
  messageForm,
  notificationButton,
}): React.ReactElement | null => {
  const size = useWindowSize();
  const isCurrentDialogPage = useRouteMatch(`${SCREENS.SCREEN_CURRENT_DIALOG}`);
  const isDialogsPage = useRouteMatch(`${SCREENS.SCREEN_DIALOGS}`);

  return (
    <MainContainer page={Pages.chat}>
      {(size.width > WindowSize.SIZE_MOBILE_L || isDialogsPage?.isExact) && header}

      <main className="chat-page__inner">
        {(size.width > WindowSize.SIZE_MOBILE_L || isDialogsPage?.isExact) && userList}

        <Wrapper className="chat-page__dialog">
          {isCurrentDialogPage ? (
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
