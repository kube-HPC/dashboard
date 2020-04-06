import { PIPELINE } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import restSlice from '../rest';

const { STATE, URL } = PIPELINE;

const {
  thunks: { post },
} = restSlice;

export const rerunRaw = createAsyncThunk(
  STATE.rerunRaw,
  async (jobIdToRun, { dispatch, getState }) => {
    const { jobs } = getState();

    const pipeline = jobs.dataSource?.find(({ key }) => key === jobIdToRun)?.pipeline;

    /* eslint-disable no-unused-vars */
    // Destruct all unused values
    const { jobId, flowInputOrig, flowInput, startTime, lastRunResult, types, ...rest } = pipeline;

    const body = { flowInput: flowInputOrig, ...rest };

    const { payload } = await dispatch(post({ url: URL.execRaw, body }));
    return payload;
  },
);

export const stopPipeline = createAsyncThunk(STATE.stopPipeline, async (jobId, { dispatch }) => {
  const body = { jobId, reason: `Request from Dashboard-v2` };
  const { payload } = await dispatch(post({ url: URL.execStop, body }));
  return payload;
});

export const resumePipeline = createAsyncThunk(STATE.resume, async (jobId, { dispatch }) => {
  const body = { jobId };
  const { payload } = await dispatch(post({ url: URL.execResume, body }));
  return payload;
});

export const pausePipeline = createAsyncThunk(STATE.pause, async (jobId, { dispatch }) => {
  const body = { jobId };
  const { payload } = await dispatch(post({ url: URL.execPause, body }));
  return payload;
});
