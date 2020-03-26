import { useSelector } from 'react-redux';
import jobs from './raw';
import useActions from './useActions';

const useJobs = () => {
  const jobsEntries =
    jobs?.dataSource.map(
      ({ key: jobId, pipeline: { name, types, startTime }, status: { status }, results }) => ({
        jobId,
        pipelineName: name,
        types,
        startTime,
        status,
        timeTook: results?.timeTook,
      }),
    ) ?? [];

  const {
    jobs: { select },
  } = useActions();
  const { selected } = useSelector(state => state.jobs);

  return { jobs: jobs.dataSource, list: jobsEntries, select, selected };
};

export default useJobs;
