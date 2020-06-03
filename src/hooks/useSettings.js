import { LOCAL_STORAGE } from '@constants';
import { useActions, useLocalStorage } from '@hooks';
import { createSelector } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const settingsSelector = createSelector(
  state => state.dashboard.settings,
  settings => settings,
);

const useSettings = () => {
  const { logSource } = useSelector(settingsSelector);
  const {
    dashboard: { setLogSource },
  } = useActions();

  const [, setStorageItem] = useLocalStorage(LOCAL_STORAGE.SETTINGS, { logSource });

  useEffect(() => {
    setStorageItem(logSource);
  }, [logSource, setStorageItem]);

  return { logSource, setLogSource };
};

export default useSettings;
