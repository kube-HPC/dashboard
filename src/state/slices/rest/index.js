import rest from './rest.slice';
import { fileDownload, post } from './rest.thunks';

const restSlice = { ...rest, thunks: { post, fileDownload } };

export default restSlice;
