import { combineReducers } from '@reduxjs/toolkit';
import {
  experimentsSlice,
  jobsSlice,
  panelSlice,
  pipelinesSlice,
  sidebarSlice,
  socketSlice,
} from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: panel } = panelSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: pipelines } = pipelinesSlice;

const reducer = combineReducers({ sidebar, socket, experiments, panel, jobs, pipelines });

export default reducer;
