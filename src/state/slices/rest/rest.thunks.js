import { CONNECTION, REST } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { stringify } from '@utils';

const { STATE } = REST;

const {
  monitor: { url: monitorUrl, path },
} = CONNECTION;

const toUrl = url => `${monitorUrl}/${path}/${url}`;
const resultsPath = `${monitorUrl}/${path}/download/results?path=`;

export const fileDownload = createAsyncThunk(STATE.fileDownload, async url => {
  const rawResponse = await fetch(`${resultsPath}${url}`, {
    method: `GET`,
    headers: {
      'Content-Type': `blob`,
    },
  });
  const content = await rawResponse.blob();

  return content;
});

export const post = createAsyncThunk(STATE.post, async ({ url, body }) => {
  const rawResponse = await fetch(toUrl(url), {
    method: `POST`,
    headers: {
      Accept: `application/json`,
      'Content-Type': `application/json`,
    },
    body: stringify(body),
  });
  const content = await rawResponse.json();

  return content;
});

export const get = createAsyncThunk(STATE.get, async ({ url }) => {
  const rawResponse = await fetch(toUrl(url), {
    method: `GET`,
    headers: {
      'Content-Type': `application/json`,
    },
  });
  const content = await rawResponse.json();
  return content;
});
