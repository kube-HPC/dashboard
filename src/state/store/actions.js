import { experimentsSlice, sidebarSlice, socketSlice } from '@slices';

const actions = {
  sidebar: sidebarSlice.actions,
  socket: socketSlice.actions,
  experiment: experimentsSlice.actions,
};

export default actions;
