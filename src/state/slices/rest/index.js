import rest from './rest.slice';
import { fileDownload, get, post } from './rest.thunks';

const restSlice = { ...rest, thunks: { post, fileDownload, get } };

export default restSlice;
