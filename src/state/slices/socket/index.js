import slice from './socket.slice';
import { changeRoom, init } from './socket.thunks';

const socketSlice = { ...slice, thunks: { init, changeRoom } };

export default socketSlice;
