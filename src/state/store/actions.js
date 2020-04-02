import {
  experimentsSlice,
  jobsSlice,
  panelSlice,
  pipelinesSlice,
  sidebarSlice,
  socketSlice,
} from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  experiment: experimentsSlice.actions,
  panel: panelSlice.actions,
  jobs: jobsSlice.actions,
  pipelines: { ...pipelinesSlice.actions, ...pipelinesSlice.thunks },
};

export default actions;
