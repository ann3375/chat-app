import React from 'react';
import Button from '../../components/atoms/Button';
import { ButtonSize, ButtonType, ButtonVariant } from '../../components/atoms/Button/types/types';
import { ColorType, IconName } from '../../components/atoms/Icon/types/types';
import { InputId, InputType } from '../../components/atoms/Input/types/types';
import Logo from '../../components/atoms/Logo';
import { LogoSize } from '../../components/atoms/Logo/types/types';
import Typography from '../../components/atoms/Typography';
import { TypographyTypeStyle } from '../../components/atoms/Typography/types/types';
import ButtonIcon from '../../components/molecules/ButtonIcon';
import DialogMessage from '../../components/molecules/DialogMessage';
import FileInput from '../../components/molecules/FileInput';
import FormInput from '../../components/molecules/FormInput';

const Home = (): React.ReactElement => {
  return (
    <div>
      <Typography variant={TypographyTypeStyle.h1}> Header 1 </Typography>
      <Typography variant={TypographyTypeStyle.h2}> Header 2 </Typography>
      <Typography variant={TypographyTypeStyle.h3}> Header 3 </Typography>
      <Typography variant={TypographyTypeStyle.h4}> Header 4 </Typography>
      <Typography variant={TypographyTypeStyle.p1}> Text 1 </Typography>
      <Typography variant={TypographyTypeStyle.p2}> Text 2 </Typography>

      <FormInput labelText={'User name'} id={InputId.username} type={InputType.email} />
      <FormInput
        labelText={'User name'}
        errorText={'Something goes wrong'}
        id={InputId.username}
        type={InputType.email}
      />

      <Logo size={LogoSize.large} />
      <Logo size={LogoSize.medium} />

      <Button size={ButtonSize.large} type={ButtonType.button} variant={ButtonVariant.primary}>
        Log in
      </Button>

      <Button
        size={ButtonSize.medium}
        isDisabled
        type={ButtonType.button}
        variant={ButtonVariant.primary}
      >
        Log in
      </Button>

      <Button size={ButtonSize.small} type={ButtonType.button} variant={ButtonVariant.primary}>
        Log in
      </Button>

      <Button size={ButtonSize.large} type={ButtonType.button} variant={ButtonVariant.outline}>
        Log in
      </Button>

      <Button size={ButtonSize.large} type={ButtonType.button} variant={ButtonVariant.notification}>
        Select a chat to stary messaging
      </Button>

      <ButtonIcon iconName={IconName.addFile} type={ButtonType.button} color={ColorType.grey} />
      <ButtonIcon
        iconName={IconName.sendMessage}
        type={ButtonType.button}
        color={ColorType.primary}
      />
      <ButtonIcon iconName={IconName.userList} type={ButtonType.button} color={ColorType.primary} />
      <ButtonIcon iconName={IconName.userIcon} type={ButtonType.button} color={ColorType.primary} />

      <DialogMessage
        messageText={'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd'}
        isCurrentUserMessage
      />
      <DialogMessage
        messageText={
          'asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd'
        }
        isCurrentUserMessage={false}
      />

      <FileInput id={InputId.file} />
    </div>
  );
};

export default Home;
