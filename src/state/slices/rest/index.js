import rest from './rest.slice';
import { post } from './rest.thunks';

const restSlice = { ...rest, thunks: { post } };

export default restSlice;
