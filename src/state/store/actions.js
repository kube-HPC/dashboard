import {
  experimentsSlice,
  jobsSlice,
  notificationsSlice,
  panelSlice,
  pipelinesSlice,
  sidebarSlice,
  socketSlice,
  themeSlice,
} from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  experiment: experimentsSlice.actions,
  panel: panelSlice.actions,
  jobs: { ...jobsSlice.actions, ...jobsSlice.thunks },
  pipelines: { ...pipelinesSlice.actions, ...pipelinesSlice.thunks },
  notifications: notificationsSlice.actions,
  theme: themeSlice.actions,
};

export default actions;
