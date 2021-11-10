import { SUPPORTED_FORMATS } from '../components/organism/MessageForm/constants/constants';

export const isFileValid = (file: File): boolean => {
  if (!file) return false;

  return file.size <= 2 * 1024 * 1024 &&
    [...SUPPORTED_FORMATS.VIDEO, ...SUPPORTED_FORMATS.AUDIO, ...SUPPORTED_FORMATS.IMAGE].includes(
      file.type
    )
    ? true
    : false;
};
