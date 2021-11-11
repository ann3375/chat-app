import React, { useCallback, useContext, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { useForm, Controller, SubmitHandler, FieldValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Wrapper } from '../../atoms/Wrapper';
import { ButtonIcon } from '../../molecules/ButtonIcon';
import { FileInput } from '../../molecules/FileInput';
import { FormInput } from '../../molecules/FormInput';
import { ButtonType } from '../../atoms/Button/types/types';
import { ColorType, IconName } from '../../atoms/Icon/types/types';
import { InputId, InputType } from '../../molecules/FormInput/types/types';
import { RootStoreContext } from '../../../store/RootStore';
import { IWSAction } from '../../../services/types';
import { URL, HTTP_PORT } from '../../../services/contants';
import { FilePreview } from '../FilePreview';
import { useFileReader } from '../../../hooks/useFileReader';
import { validateFile } from '../../../utils/validateFile';

import './messageForm.scss';

interface IMessageForm {
  WSAction: IWSAction;
}

interface IFormInput {
  messageText: string;
  files: File;
}

const schema = yup.object().shape({
  messageText: yup.string(),
});

export const MessageForm = React.memo(function MessageForm({ WSAction }: IMessageForm) {
  const { currentDialogStore, userStore } = useContext(RootStoreContext);
  const [previewFileState, setPreviewFileState] = useFileReader();

  const message = useRef<{ messageText?: string; fromUser?: string; fileLink?: string }>({
    messageText: '',
    fromUser: '',
    fileLink: '',
  });

  const {
    handleSubmit,
    control,
    reset,
    clearErrors,
    setError,
    formState: { errors, isValid, isSubmitSuccessful },
  } = useForm<FieldValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      messageText: '',
      files: [],
    },
  });

  const handleDeletePreviewFile = useCallback(() => {
    previewFileState.handleDeleteFile();
    previewFileState.handleResetUniqueKey();
    reset({ files: [] });
  }, [previewFileState, reset]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = new FormData();

    message.current = {
      messageText: data.messageText,
      fromUser: userStore.user.username,
    };

    if (data.files?.name) {
      formData.append('0', data.files, data.files.name);
      const fileLink = await currentDialogStore.sendMessageFile<string>(formData, '/upload');

      message.current.fileLink = fileLink ? `${URL}:${HTTP_PORT}${fileLink}` : '';
    }

    WSAction.sendMessage(`'${JSON.stringify(message)}'`);
  };

  const fileErrors = errors.files?.message || currentDialogStore.dialogMessagesError;

  const handleFileInputChange = (
    event: { target: HTMLInputElement },
    onChangeHandler: (e: File) => void
  ) => {
    if (event.target.files?.length) {
      const file = event.target.files[0];
      if (validateFile(file).isValid) {
        setPreviewFileState(file);
        onChangeHandler(file);
      }

      validateFile(file).isSizeError &&
        setError('files', { type: 'fileError', message: 'Размер файла должен быть меньше 2 мб' });

      validateFile(file).isTypeError &&
        setError('files', { type: 'fileError', message: `Данный тип не поддерживается` });
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      handleDeletePreviewFile();
      reset({ files: [], messageText: '' });
      message.current = {
        messageText: '',
        fromUser: '',
      };
    }
  }, [isSubmitSuccessful, handleDeletePreviewFile, reset]);

  useEffect(() => {
    if (fileErrors) {
      () => previewFileState.handleResetUniqueKey();

      setTimeout(() => {
        clearErrors('files');
        currentDialogStore.clearError();
      }, 1000);
    }
  }, [clearErrors, previewFileState, fileErrors, currentDialogStore]);

  return (
    <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
      <Wrapper className="message-form__preview-block">
        <FilePreview
          previewFileState={previewFileState}
          handleDeletePreviewFile={handleDeletePreviewFile}
        />
      </Wrapper>

      {previewFileState.fileInfo.name && (
        <ButtonIcon
          className={classNames('message-form__preview-button', {
            'message-form__preview-button_active': !previewFileState.isVisiblePreviewFile,
          })}
          iconName={IconName.arrowDown}
          type={ButtonType.button}
          onClick={previewFileState.handleSetIsVisiblePreview}
        />
      )}

      <Wrapper flex align="center" className="message-form__inner">
        <Controller
          name={InputId.files}
          control={control}
          render={({ field }) => (
            <FileInput
              id={InputId.files}
              field={field}
              handleFileInputChange={handleFileInputChange}
              uniqueKey={previewFileState.uniqueKeyInput}
              errorText={fileErrors}
            />
          )}
        />

        <Controller
          name={InputId.messageText}
          control={control}
          render={({ field }) => (
            <FormInput placeholder="Write something..." type={InputType.textarea} field={field} />
          )}
        />

        <ButtonIcon
          iconName={IconName.sendMessage}
          type={ButtonType.submit}
          color={ColorType.primary}
          className="message-form__button"
          isDisabled={!isValid}
        />
      </Wrapper>
    </form>
  );
});
