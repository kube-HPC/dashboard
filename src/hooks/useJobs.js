import { createSelector } from '@reduxjs/toolkit';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const listSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource =>
    dataSource?.map(
      ({ key: jobId, pipeline: { name, types, startTime }, status: { status }, results }) => ({
        jobId,
        pipelineName: name,
        types,
        startTime,
        status,
        timeTook: results?.timeTook,
      }),
    ) ?? [],
);

const useJobs = () => {
  const selected = useSelector(state => state.jobs.selected);
  const list = useSelector(listSelector, isEqual);

  const {
    jobs: { select },
  } = useActions();

  return { list, selected, select };
};

export default createStore(useJobs);
