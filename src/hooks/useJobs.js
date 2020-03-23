import jobs from './raw';

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

  return { jobs: jobs.dataSource, list: jobsEntries };
};

export default useJobs;
