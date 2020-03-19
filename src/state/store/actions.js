import { experimentSlice, sidebarSlice, socketSlice } from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: socketSlice.actions,
  experiment: experimentSlice.actions,
};

export default actions;
