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
    jobs: { addExperiment, changeExperiment, deleteExperiment },
    socket: { changeRoom },
  } = useActions();

  const [, setStorageSource] = useLocalStorage(LOCAL_STORAGE.SETTINGS, { logSource });
  const [, setStorageExperiment] = useLocalStorage(LOCAL_STORAGE.EXPERIMENT, experiments.value);

  useEffect(() => {
    setStorageSource(logSource);
  }, [logSource, setStorageSource]);

  useEffect(() => {
    setStorageExperiment(experiments.value);
  }, [experiments.value, setStorageExperiment]);

  useEffect(() => {
    changeRoom();
  }, [changeRoom, experiments.value]);

  return {
    logSource,
    setLogSource,
    experiments: {
      ...experiments,
      add: addExperiment,
      set: changeExperiment,
      remove: deleteExperiment,
    },
  };
};

export default useSettings;
