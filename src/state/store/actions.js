import {
  dashboardSlice,
  experimentsSlice,
  jobsSlice,
  notificationsSlice,
  panelSlice,
  pipelinesSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const actions = {
  dashboard: dashboardSlice.actions,
  experiment: experimentsSlice.actions,
  jobs: { ...jobsSlice.actions, ...jobsSlice.thunks },
  notifications: notificationsSlice.actions,
  panel: panelSlice.actions,
  pipelines: { ...pipelinesSlice.actions, ...pipelinesSlice.thunks },
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  theme: themeSlice.actions,
};

export default actions;
