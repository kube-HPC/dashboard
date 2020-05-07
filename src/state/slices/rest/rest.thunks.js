import { CONNECTION, REST } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { STATE } = REST;

const {
  monitor: { url: monitorUrl, path },
} = CONNECTION;

const toUrl = url => `${monitorUrl}/${path}/${url}`;
const resultsPath = `${monitorUrl}/${path}/download/results?path=`;

export const fileDownload = createAsyncThunk(STATE.fileDownload, async url => {
  const res = await axios.get(`${resultsPath}${url}`, {
    responseType: `blob`,
    timeout: 30000,
  });
  return res.data;
});

export const post = createAsyncThunk(STATE.post, async ({ url, body }) => {
  const res = await axios.post(toUrl(url), body);
  return res.data;
});

export const get = createAsyncThunk(STATE.get, async ({ url }) => {
  console.log(toUrl(url));
  const res = await axios.get(toUrl(url));
  return res.data;
});
