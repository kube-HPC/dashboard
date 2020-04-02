import { PIPELINE, REST } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';

const { STATE, URL } = PIPELINE;
const { STATE: REST_STATE } = REST;

export const rerunRaw = createAsyncThunk(STATE.rerunRaw, (pipeline, { dispatch }) => {
  /* eslint-disable no-unused-vars */
  // Destruct all unused values
  const { jobId, flowInputOrig, flowInput, startTime, lastRunResult, types, ...rest } = pipeline;

  const body = {
    flowInput: flowInputOrig,
    ...rest,
  };

  dispatch({
    type: REST_STATE.post,
    payload: {
      url: URL.execRaw,
      body,
    },
  });
});
