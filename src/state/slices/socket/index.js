import { init } from './reducers';
import slice from './slice';

const socketSlice = { ...slice, thunks: { init } };

export default socketSlice;
