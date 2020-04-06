import { pipelineStatuses as PIPELINE_STATUS } from '@hkube/consts';
import { createSelector } from '@reduxjs/toolkit';

const findJob = ({ dataSource, jobId }) => dataSource?.find(({ key }) => key === jobId);

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

export const downloadPathSelector = jobId =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource => findJob({ dataSource, jobId })?.results?.data?.storageInfo?.path ?? null,
  );

const activeStates = [PIPELINE_STATUS.PENDING, PIPELINE_STATUS.ACTIVE, PIPELINE_STATUS.RESUMED];

const isActive = state => activeStates.includes(state);
const canPause = state => isActive(state);
const canPauseOrStop = state => isActive(state) || state === PIPELINE_STATUS.PAUSED;

export const statusSelector = jobId =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource => {
      const status = findJob({ dataSource, jobId })?.status?.status;
      return { canBeStopped: canPauseOrStop(status), canBePaused: canPause(status) };
    },
  );
