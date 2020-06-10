import { LOCAL_STORAGE } from '@constants';
import { useActions, useLocalStorage } from '@hooks';
import { createSelector } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const settingsSelector = createSelector(
  state => state.dashboard.settings,
  state => state.jobs.experiments,
  (settings, { dataSource, value }) => ({
    ...settings,
    experiments: {
      dataSource,
      value,
    },
  }),
);

const useSettings = () => {
  const { logSource, experiments } = useSelector(settingsSelector);
  const {
    dashboard: { setLogSource },
    jobs: { addExperiment },
  } = useActions();

  const [, setStorageItem] = useLocalStorage(LOCAL_STORAGE.SETTINGS, { logSource });

  useEffect(() => {
    setStorageItem(logSource);
  }, [logSource, setStorageItem]);

  return { logSource, setLogSource, experiments, addExperiment };
};

export default useSettings;
