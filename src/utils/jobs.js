import { createSelector } from '@reduxjs/toolkit';

export const mapToJobEntry = ({
  key: jobId,
  pipeline: { name, types, startTime },
  status: { status },
  results,
}) => ({
  jobId,
  pipelineName: name,
  types,
  startTime,
  status,
  timeTook: results?.timeTook,
});

export const downloadPathSelector = currJobId =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource =>
      dataSource?.find(({ key }) => key === currJobId)?.results?.data?.storageInfo?.path ?? null,
  );
