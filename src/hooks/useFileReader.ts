import { useCallback, useState } from 'react';

export type FileInfoType = {
  src: string;
  type: string;
  size: number;
  name: string;
};

export interface IUseFileReader {
  fileInfo: FileInfoType;
  isLoaded: boolean;
  isVisiblePreviewFile: boolean;
  uniqueKeyInput: number;
  setFileInfo: (fileInfo: FileInfoType) => void;
  handleSetIsVisiblePreview: () => void;
  handleDeleteFile: () => void;
  handleResetUniqueKey: () => void;
}

const initialFileInfoState = {
  src: '',
  type: '',
  size: 0,
  name: '',
};

export const useFileReader = (): [IUseFileReader, (file: File) => void] => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fileInfo, setFileInfo] = useState<FileInfoType>(initialFileInfoState);
  const [isVisiblePreviewFile, setIsVisiblePreviewFile] = useState<boolean>(false);
  const [uniqueKeyInput, resetUniqueKeyInput] = useState<number>(Date.now());

  const loadFile = useCallback((file: File) => {
    const reader = new FileReader();
    setIsVisiblePreviewFile(false);

    reader.onload = function () {
      setFileInfo({
        src: reader.result as string,
        type: file.type,
        size: file.size,
        name: file.name,
      });
      setIsLoaded(true);
      setIsVisiblePreviewFile(true);
    };

    reader.readAsDataURL(file);
  }, []);

  const handleSetIsVisiblePreview = useCallback(() => {
    setIsVisiblePreviewFile(!isVisiblePreviewFile);
  }, [isVisiblePreviewFile]);

  const handleDeleteFile = useCallback(() => {
    setFileInfo(initialFileInfoState);
    setIsVisiblePreviewFile(false);
  }, []);

  const handleResetUniqueKey = useCallback(() => {
    resetUniqueKeyInput(Date.now());
  }, []);

  return [
    {
      fileInfo,
      isLoaded,
      isVisiblePreviewFile,
      uniqueKeyInput,
      setFileInfo,
      handleSetIsVisiblePreview,
      handleDeleteFile,
      handleResetUniqueKey,
    },
    loadFile,
  ];
};
