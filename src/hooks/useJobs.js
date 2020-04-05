import { createSelector } from '@reduxjs/toolkit';
import { mapToJobEntry } from '@utils';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const listSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(mapToJobEntry) ?? [],
);
const jobIdSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(({ key }) => key) ?? [],
);

const useJobs = () => {
  const selected = useSelector(state => state.jobs.selected);
  const list = useSelector(listSelector, isEqual);
  const jobIdList = useSelector(jobIdSelector, isEqual);

  const {
    jobs: { select },
  } = useActions();

  return { list, selected, select, jobIdList };
};

export default createStore(useJobs);
