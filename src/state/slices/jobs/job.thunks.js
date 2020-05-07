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

export const getLogs = createAsyncThunk(STATE.getLogs, async (_, { dispatch, getState }) => {
  const {
    jobs: { dataSource, selected },
  } = getState();

  const job = dataSource?.find(({ key }) => key === selected);

  const nodes = job?.graph.nodes;
  const firstTask = nodes?.[0];

  console.log(`getLogs -> firstTask`, firstTask);

  if (firstTask) {
    const { podName, taskId, source = `k8s` } = firstTask;
    console.log(`getLogs -> { podName, taskId, source = \`k8s\` }`, { podName, taskId, source });

    const { payload } = await dispatch(
      get({ url: `logs?podName=${podName}&taskId=${taskId}&source=${source}` }),
    );

    console.log(`payload logs`, payload);
    return payload;
  }

  return null;
});
