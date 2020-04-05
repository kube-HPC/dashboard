import { PIPELINE, SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import { select } from './pipelines.reducers';

const initialState = { dataSource: null, selected: null };

const pipelineSlice = createSlice({
  name: PIPELINE.STATE.name,
  initialState,
  reducers: {
    select,
  },
  extraReducers: {
    [SOCKET.STATE.pull]: (state, { payload: { pipelines } }) => {
      state.dataSource = pipelines;
    },
  },
});

export default pipelineSlice;
