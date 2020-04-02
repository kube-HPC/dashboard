import { combineReducers } from '@reduxjs/toolkit';
import {
  experimentsSlice,
  jobsSlice,
  panelSlice,
  scrollSlice,
  sidebarSlice,
  socketSlice,
} from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: panel } = panelSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: scroll } = scrollSlice;

const reducer = combineReducers({ sidebar, socket, experiments, panel, jobs, scroll });

export default reducer;
