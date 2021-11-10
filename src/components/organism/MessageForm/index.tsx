import React, { useCallback, useContext } from 'react';
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
import { isFileValid } from '../../../utils/isFileValid';

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
  files: yup
    .mixed()
    .test('fileSize', 'Размер файла должен быть меньше 2 мб', (value: File) =>
      value.size ? value.size <= 2 * 1024 * 1024 : true
    )
    .test('fileType', `Данный тип не поддерживается`, (value: File) =>
      value.type ? isFileValid(value) : false
    ),
});

export const MessageForm = React.memo(function MessageForm({ WSAction }: IMessageForm) {
  const { currentDialogStore, userStore } = useContext(RootStoreContext);
  const [fileState, setFileState] = useFileReader();

  const {
    handleSubmit,
    control,
    setValue,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<FieldValues>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      messageText: '',
      files: [],
    },
  });

  const handleDeleteFile = useCallback(() => {
    fileState.handleDeleteFile();
    fileState.handleResetUniqueKey();
    setValue('files', []);
  }, [fileState, setValue]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = new FormData();

    const message: { messageText: string; fromUser: string; fileLink?: string } = {
      messageText: data.messageText,
      fromUser: userStore.user.username,
    };

    if (data.files?.name) {
      formData.append('0', data.files, data.files.name);
      const fileLink = await currentDialogStore.sendMessageFile<string>(formData, '/upload');
      message.fileLink = `${URL}:${HTTP_PORT}${fileLink}`;
    }

    WSAction.sendMessage(`'${JSON.stringify(message)}'`);
    fileState.handleDeleteFile();
  };

  setTimeout(() => {
    currentDialogStore.clearError();
  }, 3000);

  return (
    <form className="message-form" onSubmit={handleSubmit(onSubmit)}>
      <Wrapper className="message-form__preview-block">
        <FilePreview fileState={fileState} handleDeleteFile={handleDeleteFile} />
      </Wrapper>

      {fileState.fileInfo.name && (
        <ButtonIcon
          className={classNames('message-form__preview-button', {
            'message-form__preview-button_active': !fileState.isVisiblePreviewFile,
          })}
          iconName={IconName.arrowDown}
          type={ButtonType.button}
          onClick={fileState.handleSetIsVisiblePreview}
        />
      )}

      <Wrapper flex align="center" className="message-form__inner">
        <Controller
          name={InputId.files}
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <FileInput
              id={InputId.files}
              field={field}
              clearErrors={clearErrors}
              handleDeleteFile={fileState.handleDeleteFile}
              handleResetUniqueKey={fileState.handleResetUniqueKey}
              setFileState={setFileState}
              uniqueKey={fileState.uniqueKeyInput}
              errorText={errors.files?.message || currentDialogStore.dialogMessagesError}
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
