import * as React from 'react';

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

export function useLocalStorageState<T>(
  key: string,
  defaultValue: T,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {}
): [T, SetValue<T>] {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      return deserialize(valueInLocalStorage);
    }
    return defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    state && window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}
