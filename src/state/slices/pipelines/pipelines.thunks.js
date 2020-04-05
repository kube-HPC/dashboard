import { PIPELINE } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import restSlice from '../rest';

const { STATE, URL } = PIPELINE;

const {
  thunks: { post },
} = restSlice;

export const rerunRaw = createAsyncThunk(STATE.rerunRaw, async (pipeline, { dispatch }) => {
  /* eslint-disable no-unused-vars */
  // Destruct all unused values
  const { jobId, flowInputOrig, flowInput, startTime, lastRunResult, types, ...rest } = pipeline;

  const body = {
    flowInput: flowInputOrig,
    ...rest,
  };

  const { payload } = await dispatch(post({ url: URL.execRaw, body }));
  return payload;
});
