import { IS_WINDOW_DEFINED, safeParserJson, setLocalStorageItem, stringify } from '@utils';
import isEqual from 'lodash.isequal';
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

  const diffSetValue = newValue => {
    if (!isEqual(newValue, value)) {
      setValue(newValue);
    }
  };

  return [value, diffSetValue];
};

export default useLocalStorage;
