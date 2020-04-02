import {
  experimentsSlice,
  jobsSlice,
  panelSlice,
  scrollSlice,
  sidebarSlice,
  socketSlice,
} from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: { ...socketSlice.actions, ...socketSlice.thunks },
  experiment: experimentsSlice.actions,
  panel: panelSlice.actions,
  jobs: jobsSlice.actions,
  scroll: scrollSlice.actions,
};

export default actions;
