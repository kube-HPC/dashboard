// @flow
import { isConnected } from './socket.selectors';
import slice from './socket.slice';
import { changeRoom, init } from './socket.thunks';

const socketSlice = {
  ...slice,
  thunks: { init, changeRoom },
  selectors: { isConnected },
};

export default socketSlice;
