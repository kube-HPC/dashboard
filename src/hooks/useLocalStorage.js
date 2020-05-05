import { IS_WINDOW_DEFINED, safeParserJson, setLocalStorageItem, stringify } from '@utils';
import { useEffect, useState } from 'react';

const useLocalStorage = (localStorageKey, defaultValue) => {
  const [value, setValue] = useState(
    IS_WINDOW_DEFINED
      ? safeParserJson(window.localStorage.getItem(localStorageKey))
      : stringify(defaultValue),
  );

  useEffect(() => {
    setLocalStorageItem(localStorageKey, value);
  }, [localStorageKey, value]);

  return [value, setValue];
};

export default useLocalStorage;
