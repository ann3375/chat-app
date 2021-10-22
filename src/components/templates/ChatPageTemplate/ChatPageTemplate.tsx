import React from 'react';
import Wrapper from '../../atoms/Wrapper';
import MainContainer from '../MainContainer';

import { Pages } from '../../../router/constants';

import './chatPageTemplate.scss';
import { useHistory } from 'react-router';
import Icon from '../../atoms/Icon';
import { IconName } from '../../atoms/Icon/types/types';
import Spinner from '../../molecules/Spinner';
import ButtonIcon from '../../molecules/ButtonIcon';
import { ButtonType, ButtonVariant } from '../../atoms/Button/types/types';
import Button from '../../atoms/Button';

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
    <MainContainer grid page={Pages.chat}>
      {header}

      {userList}

      <Wrapper className="chat-container">
        {/* {pathArr.length === 3 && [statusBar, dialog, messageForm]} */}
        {pathArr.length === 3 && statusBar}

        {pathArr.length === 3 && dialog}

        {pathArr.length === 3 && messageForm}

        <Button
          variant={ButtonVariant.outline}
          className="button-notification"
          type={ButtonType.button}
        >
          Select a chat to stary messaging
        </Button>

        {/* <Spinner /> */}

        {/* {statusBar}

        {dialog}

        {messageForm} */}
      </Wrapper>
    </MainContainer>
  );
};

export default ChatPageTemplate;
