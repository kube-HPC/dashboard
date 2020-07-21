import { IS_WINDOW_DEFINED, safeParserJson } from './common';
import { stringify } from './string';

export const setLocalStorageItem = (key, item) =>
  IS_WINDOW_DEFINED ? window.localStorage.setItem(key, stringify(item)) : undefined;

export const getLocalStorageItem = item =>
  IS_WINDOW_DEFINED ? safeParserJson(window.localStorage.getItem(item)) : undefined;

export const getBooleanLSItem = str => {
  const storageItem = getLocalStorageItem(str);
  return storageItem === `true` || !storageItem ? true : false;
};
