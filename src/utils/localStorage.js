import { IS_WINDOW_DEFINED } from './common';

export const setLsItem = (str, object) =>
  IS_WINDOW_DEFINED ? window.localStorage.setItem(str, object) : undefined;

export const getLsItem = str => (IS_WINDOW_DEFINED ? window.localStorage.getItem(str) : undefined);

export const getBooleanLSItem = str => {
  const storageItem = getLsItem(str);
  return storageItem === `true` || !storageItem ? true : false;
};

export const setLsObjectItem = (str, object) => setLsItem(str, JSON.stringify(object));

export const getLsObjectItem = (str, object) => {
  try {
    return JSON.parse(getLsItem(str, object));
  } catch (e) {
    return null;
  }
};
