import { JOBS } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { logSourceValueToKey } from '@utils';
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
    jobs: { dataSource, selected, taskId },
    dashboard: { settings },
  } = getState();

  const job = dataSource?.find(({ key }) => key === selected);
  const node = job?.graph.nodes.find(({ taskId: curr }) => curr === taskId);

  if (node) {
    const { podName, taskId } = node;
    const source = logSourceValueToKey(settings.logSource);

    const { payload } = await dispatch(
      get({ url: `logs?podName=${podName}&taskId=${taskId}&source=${source}` }),
    );

    return payload;
  }

  return null;
});
