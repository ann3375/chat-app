import classNames from 'classnames';
import React, { useState } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { Label } from '../../atoms/Label';
import { Typography } from '../../atoms/Typography';
import { TypographyTypeStyle } from '../../atoms/Typography/types/types';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../ButtonIcon';

import './formSelect.scss';

interface IFormInput {
  username: string;
  password: string;
  captcha: string;
}

interface IFormSelect {
  options: { id: string; gender: string }[];
  setValue: UseFormSetValue<IFormInput>;
  clearErrors: any;
  error: string | undefined;
}

export const FormSelect: React.FC<IFormSelect> = ({ options, setValue, clearErrors, error }) => {
  const [isVisibleList, setIsVisibleList] = useState(false);
  const [genderValue, setGenderValue] = useState('');

  const classProps = classNames('select__list', {
    ' select__list_active': isVisibleList,
  });
  console.log(error);

  return (
    <>
      <div
        className={classNames('select', {
          ' select_notification_error': error,
        })}
        onClick={() => setIsVisibleList(!isVisibleList)}
      >
        <Typography
          variant={TypographyTypeStyle.p3}
          className="select__placeholder"
          color={genderValue ? undefined : ColorType.darkGrey}
        >
          {genderValue ? genderValue : 'Your gender'}
        </Typography>
        <ButtonIcon
          className={classNames(`select__button`, {
            ' select__button_active': isVisibleList,
          })}
          iconName={IconName.arrowDown}
          color={ColorType.primary}
          type={ButtonType.button}
        />
      </div>
      {error && <Label errorText={error} className="form-field__label_notification_error" />}

      <ul className={classProps}>
        {options.length &&
          options.map((item) => (
            <li
              className="select__item"
              onClick={() => {
                clearErrors(['password']);
                setValue('password', item.id);
                setGenderValue(item.gender);
                setIsVisibleList(!isVisibleList);
              }}
              key={item.id}
            >
              <Typography variant={TypographyTypeStyle.p3}>{item.gender}</Typography>
            </li>
          ))}
      </ul>
    </>
  );
};
