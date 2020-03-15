export { default as counter } from './counter.slice';
export { default as experiments } from './experiments.slice';

import socketSlice from './socket';
export const socket = socketSlice.reducer;
