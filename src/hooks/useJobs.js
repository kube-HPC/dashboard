import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const EMPTY = [];

const useJobs = () => {
  const {
    jobs: { select },
  } = useActions();

  const { selected, dataSource } = useSelector(state => state.jobs, isEqual);

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

  return { list: jobsEntries, select, selected };
};

export default useJobs;
