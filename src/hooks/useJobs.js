import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const EMPTY = [];

const useJobs = () => {
  const { dataSource, selected } = useSelector(state => state.jobs, isEqual);

  const {
    jobs: { select },
  } = useActions();

  const jobsEntries =
    dataSource?.map(
      ({ key: jobId, pipeline: { name, types, startTime }, status: { status }, results }) => ({
        jobId,
        pipelineName: name,
        types,
        startTime,
        status,
        timeTook: results?.timeTook,
      }),
    ) ?? EMPTY;

  return { list: jobsEntries, selected, select };
};

export default createStore(useJobs);
