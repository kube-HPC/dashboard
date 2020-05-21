import { STYLE } from '@config';
import { pipelineStatuses as PIPELINE_STATUS } from '@hkube/consts';
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

export const activeStates = [
  PIPELINE_STATUS.PENDING,
  PIPELINE_STATUS.ACTIVE,
  PIPELINE_STATUS.RESUMED,
];

const isActive = state => activeStates.includes(state);
const canPause = state => isActive(state);
const canPauseOrStop = state => isActive(state) || state === PIPELINE_STATUS.PAUSED;

const findJob = ({ dataSource, jobId }) => dataSource?.find(({ key }) => key === jobId);

// Return strings array
export const filteredJobIds = createSelector(
  state => state.jobs.dataSource?.map(({ key, pipeline: { name } }) => ({ key, name })) ?? [],
  state => state.dashboard.filters.jobs,
  (dataSource, filters) => {
    const { jobId, pipelineName } = filters;
    let $dataSource = dataSource;
    if (jobId) {
      $dataSource = $dataSource.filter(({ key }) => key.includes(jobId));
    }
    if (pipelineName) {
      $dataSource = $dataSource.filter(({ name }) => name.includes(pipelineName));
    }
    return $dataSource.map(({ key }) => key);
  },
);

export const entrySelector = jobIdToFind =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource => dataSource?.map(mapToJobEntry)?.find(({ jobId }) => jobIdToFind === jobId),
  );

export const statusSelector = jobId =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource => {
      const job = findJob({ dataSource, jobId });
      const status = job?.status?.status;
      const downloadPath = job?.results?.data?.storageInfo?.path ?? null;
      const canBeStopped = canPauseOrStop(status);
      const canBePaused = canPause(status);
      const canBeDownload = downloadPath !== null;
      return { canBeStopped, canBePaused, canBeDownload };
    },
  );

export const selectedStatsSelector = createSelector(
  state => state.jobs,
  ({ dataSource, selected }) => {
    const job = findJob({ dataSource, jobId: selected });
    const nodesStats = job?.status.data?.states;
    const progress = job?.status.data?.progress;
    const priority = job?.pipeline.priority;

    return { nodesStats, priority, progress };
  },
);

export const graphSelectorByJobId = jobId =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource => {
      const graph = findJob({ dataSource, jobId })?.graph ?? null;

      if (graph) {
        const { nodes, edges, timestamp, jobId } = graph;
        return { nodes, edges, timestamp, jobId };
      }

      return null;
    },
  );

export const progressSelector = jobId =>
  createSelector(
    state => state.jobs.dataSource,
    dataSource => {
      const job = findJob({ dataSource, jobId });
      const status = job?.status?.status;
      const nodesStats = job?.status.data?.states;
      const progress = job?.status.data?.progress;

      return { status, nodesStats, progress };
    },
  );

export const eyeSelector = jobId =>
  createSelector(
    state => state.dashboard.eyes,
    eyes => eyes.jobs[jobId]?.isShowDetails,
  );

export const itemSizeSelector = createSelector(
  state => state.jobs.dataSource,
  state => state.dashboard.eyes,
  (dataSource, eyes) => index => {
    const jobId = dataSource[index]?.key;
    const { isShowDetails } = eyes.jobs[jobId];

    return isShowDetails ? STYLE.itemSize.jobs.open : STYLE.itemSize.jobs.normal;
  },
);

export const graphSelector = createSelector(
  state => state.jobs.selected,
  state => state.jobs.dataSource,
  (selected, dataSource) => {
    const graph = selected ? dataSource.find(job => job?.graph?.jobId === selected)?.graph : null;

    if (graph) {
      const { nodes, edges, timestamp, jobId } = graph;
      return { nodes, edges, timestamp, jobId };
    }

    return null;
  },
);

const defaultNode = {
  nodeName: ``,
  algorithmName: ``,
  stats: ``,
};

export const taskIdStatsSelector = createSelector(
  state => state.jobs,
  ({ dataSource, selected, taskId }) => {
    const job = findJob({ dataSource, jobId: selected });
    const node = job?.graph.nodes.find(({ taskId: curr }) => curr === taskId);

    const { nodeName, algorithmName, status } = node ?? defaultNode;

    return { id: taskId, nodeName, algorithmName, status };
  },
);

export const jobIdsSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(({ key }) => key),
);

export const pipelineNamesSelector = createSelector(
  state => state.jobs.dataSource,
  dataSource => dataSource?.map(({ pipeline: { name } }) => name),
);
