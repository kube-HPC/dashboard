import rest from './rest.slice';
import { deleteMethod, fileDownload, get, post } from './rest.thunks';

const restSlice = { ...rest, thunks: { post, fileDownload, get, deleteMethod } };

export default restSlice;
