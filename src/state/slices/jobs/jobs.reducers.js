// @flow
import type { JobStateProp } from './jobs.slice';

type StringPayload = {
  payload: string,
};

export const select = (state: JobStateProp, { payload: jobId }: StringPayload) => {
  state.selected = state.selected === jobId ? null : jobId;

  /* On Job Select, set default taskId as the first appeared node */
  if (state.selected) {
    const job = state.dataSource?.find(({ key }) => key === state.selected);
    const firstTaskId = job?.graph.nodes?.[0]?.taskId;
    state.taskId = firstTaskId;
  }
};

export const changeTaskId = (state: JobStateProp, { payload: taskId }: StringPayload) => {
  if (state.taskId !== taskId) {
    state.taskId = taskId;
  }
};

export const changeExperiment = (state: JobStateProp, { payload: value }: StringPayload) => {
  state.experiments.lastValue = state.experiments.value;
  state.experiments.value = value;
};

export const toggleTagsView = (state: JobStateProp) => {
  state.types.visible = !state.types.visible;
};
