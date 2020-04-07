import { JOBS } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveAs } from 'file-saver';
import restSlice from '../rest';

const { STATE } = JOBS;

const {
  thunks: { get, fileDownload },
} = restSlice;

export const downloadResults = createAsyncThunk(
  STATE.downloadResults,
  async (jobId, { dispatch, getState }) => {
    const { jobs } = getState();

    const downloadPath =
      jobs.dataSource?.find(({ key }) => key === jobId)?.results?.data?.storageInfo?.path ?? null;

    const { payload } = await dispatch(fileDownload(downloadPath));

    saveAs(payload, `${jobId}.results.json`);
  },
);

// TODO: finish
export const getLogs = createAsyncThunk(STATE.getLogs, async (jobId, { dispatch, getState }) => {
  const { jobs } = getState();

  const { podName, taskId, source = `k8s` } =
    jobs.dataSource?.find(({ key }) => key === jobId)?.results?.data?.storageInfo?.path ?? null;

  const { payload } = await dispatch(
    get(`logs?podName=${podName}&taskId=${taskId}&source=${source}`),
  );
  return payload;
});
