import { createSelector } from '@reduxjs/toolkit';
import { mapToJobEntry } from '@utils';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const jobSelector = jobIdToFind =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource => dataSource?.map(mapToJobEntry)?.find(({ jobId }) => jobIdToFind === jobId),
  );

const useJob = jobId => {
  const job = useSelector(jobSelector(jobId), isEqual);
  const isSelected = useSelector(state => state.jobs.selected === jobId);

  const {
    jobs: { select: onSelect },
  } = useActions();

  return { job, isSelected, onSelect };
};

export default useJob;
