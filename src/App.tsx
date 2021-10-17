import React from 'react';
import Button from './components/atoms/Button';
import { ButtonSize, ButtonType, ButtonVariant } from './components/atoms/Button/types/types';
import { IconColor, IconName } from './components/atoms/Icon/types/types';
import { InputId, InputType } from './components/atoms/Input/types/types';
import Typography from './components/atoms/Typography';
import { TypographyTypeStyle } from './components/atoms/Typography/types/types';
import ButtonIcon from './components/molecules/ButtonIcon';
import FormInput from './components/molecules/FormInput';

const App: React.FC = () => {
  return (
    <div>
      <Typography variant={TypographyTypeStyle.h1}>Text 1</Typography>
      <Typography variant={TypographyTypeStyle.h2}>Text 2</Typography>
      <Typography variant={TypographyTypeStyle.h3}>Text 3</Typography>
      <Typography variant={TypographyTypeStyle.h4}>Text 4</Typography>
      <Typography variant={TypographyTypeStyle.p1}>body1</Typography>
      <Typography variant={TypographyTypeStyle.p2}>body2</Typography>

      <div>
        <Button
          variant={ButtonVariant.primary}
          size={ButtonSize.large}
          type={ButtonType.submit}
          isDisabled={true}
        >
          Log in
        </Button>
      </div>

      <div>
        <Button
          variant={ButtonVariant.primary}
          size={ButtonSize.medium}
          type={ButtonType.submit}
          isDisabled={false}
        >
          Log in
        </Button>
      </div>

      <div>
        <Button
          variant={ButtonVariant.outline}
          size={ButtonSize.medium}
          type={ButtonType.submit}
          isDisabled={false}
        >
          Log in
        </Button>
      </div>

      <div style={{ width: 400, height: 80, position: 'relative' }}>
        <ButtonIcon
          iconColor={IconColor.primary}
          iconName={IconName.sendMessage}
          buttonType={ButtonType.submit}
        />
      </div>

      <div style={{ width: 400, height: 80, position: 'relative' }}>
        <ButtonIcon
          isDisabled={true}
          iconName={IconName.sendMessage}
          iconColor={IconColor.primary}
          buttonType={ButtonType.submit}
        ></ButtonIcon>
      </div>

      <div style={{ width: 400, height: 80, position: 'relative' }}>
        <ButtonIcon
          iconName={IconName.addFile}
          iconColor={IconColor.grey}
          buttonType={ButtonType.button}
        ></ButtonIcon>
      </div>

      <FormInput
        labelText="User name"
        id={InputId.username}
        placeholder={'Input user name'}
        type={InputType.text}
      />

      <FormInput
        id={InputId.password}
        placeholder={'Input user password'}
        type={InputType.password}
        errorText={'Something wrong'}
        labelText="User password"
      />
    </div>
  );
};

export default App;
