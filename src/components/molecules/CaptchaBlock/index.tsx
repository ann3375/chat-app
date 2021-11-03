import React, { useEffect, useState } from 'react';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../ButtonIcon';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import './captchaBlock.scss';
import { Spinner } from '../Spinner';

export const CaptchaBlock = (): React.ReactElement => {
  const [captchaURL, setCaptchaURL] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://109.194.37.212:93/api/auth/captcha').then((data) => {
      setIsLoaded(true);
      setCaptchaURL(data.url);
    });
  }, [captchaURL]);

  const handlerCaptchaURL = () => {
    setCaptchaURL('');
    setIsLoaded(false);
    fetch('http://109.194.37.212:93/api/auth/captcha').then((data) => {
      setIsLoaded(true);
      setCaptchaURL(data.url);
    });
  };

  return (
    <Wrapper flex align="center" className="captcha-block">
      {isLoaded ? (
        <>
          <img src={captchaURL} alt="captcha" />
          <ButtonIcon
            className="captcha-block__button"
            iconName={IconName.updateIcon}
            color={ColorType.primary}
            type={ButtonType.button}
            onClick={handlerCaptchaURL}
          />
        </>
      ) : (
        <Spinner className="captcha-block__spinner" />
      )}
    </Wrapper>
  );
};
