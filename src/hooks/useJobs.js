import { createSelector } from '@reduxjs/toolkit';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const jobIdSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(({ key }) => key) ?? [],
);

const useJobs = () => {
  const selected = useSelector(state => state.jobs.selected);
  const jobIdList = useSelector(jobIdSelector, isEqual);

  const {
    jobs: { select },
  } = useActions();

  return { selected, select, jobIdList };
};

export default createStore(useJobs);
