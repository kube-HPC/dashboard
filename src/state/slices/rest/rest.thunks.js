import { CONNECTION, REST } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { STATE } = REST;

const {
  monitor: { url: monitorUrl, path },
} = CONNECTION;

const toUrl = url => `${monitorUrl}/${path}/${url}`;

// export const downloadFile = createAsyncThunk(STATE.fileDownload, async url => {
//   const res = await axios.get(url, {
//     responseType: `blob`,
//     timeout: 30000,
//   });
//   FileSaver.saveAs(res.data, `results.json`);
// });

export const post = createAsyncThunk(STATE.post, async ({ url, body }) => {
  const res = await axios.post(toUrl(url), body);
  return res.data;
});
