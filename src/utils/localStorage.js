export const setLsItem = (str, object) => {
  if (typeof window !== `undefined`) {
    return window.localStorage.setItem(str, object);
  }
  return undefined;
};

export const getLsItem = str => {
  if (typeof window !== `undefined`) {
    return window.localStorage.getItem(str);
  }
  return undefined;
};

export const getNumberLsItem = str => {
  const storageItem = getLsItem(str);
  return Number(storageItem);
};

export const setLsObjectItem = (str, object) => setLsItem(str, JSON.stringify(object));

export const getLsObjectItem = (str, object) => {
  try {
    return JSON.parse(getLsItem(str, object));
  } catch (e) {
    return null;
  }
};
