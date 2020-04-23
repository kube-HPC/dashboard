import { IS_WINDOW_DEFINED } from './common';

export const setLocalStorageItem = (str, object) =>
  IS_WINDOW_DEFINED ? window.localStorage.setItem(str, object) : undefined;

export const getLocalStorageItem = str =>
  IS_WINDOW_DEFINED ? window.localStorage.getItem(str) : undefined;

export const getBooleanLSItem = str => {
  const storageItem = getLocalStorageItem(str);
  return storageItem === `true` || !storageItem ? true : false;
};

export const setLocalStorageObjectItem = (str, object) =>
  setLocalStorageItem(str, JSON.stringify(object));

export const getLocalStorageObjectItem = (str, object) => {
  try {
    return JSON.parse(getLocalStorageItem(str, object));
  } catch (e) {
    return null;
  }
};
