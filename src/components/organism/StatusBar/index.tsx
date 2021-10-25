import React from 'react';
import classNames from 'classnames';
import Wrapper from '../../atoms/Wrapper';
import ButtonIcon from '../../molecules/ButtonIcon';
import UserStatus from '../../molecules/UserStatus';
import { UserGender } from '../../atoms/Avatar/types/types';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';

import './statusBar.scss';

interface IStatusBar {
  isVisibleUserList: boolean;
  handleVisibleUserList: () => void;
}

const StatusBar: React.FC<IStatusBar> = ({ isVisibleUserList, handleVisibleUserList }) => {
  return (
    <Wrapper flex align="center" className="status-bar">
      <ButtonIcon
        iconName={isVisibleUserList ? IconName.closeIcon : IconName.userList}
        type={ButtonType.button}
        color={ColorType.primary}
        onClick={handleVisibleUserList}
        className={classNames('status-bar__user-list-icon', {
          ['status-bar__user-list-icon_transform']: isVisibleUserList,
        })}
      />

      <ButtonIcon
        iconName={IconName.arrowLeft}
        type={ButtonType.button}
        color={ColorType.primary}
        onClick={() => history.back()}
        className={'status-bar__back-icon'}
      />

      <UserStatus
        className="status-bar__user-status"
        username="User BobUser BobUser BobUser BobUser BobUser Bob"
        userStatus="last seen 3 min ago"
        gender={UserGender.male}
      />
    </Wrapper>
  );
};

export default StatusBar;
