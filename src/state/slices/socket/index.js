import slice from './socket.slice';
import { init } from './socket.thunks';

const socketSlice = { ...slice, thunks: { init } };

export default socketSlice;
