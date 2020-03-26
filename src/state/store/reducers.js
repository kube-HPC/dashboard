import { combineReducers } from '@reduxjs/toolkit';
import {
  adminPanelSlice,
  experimentsSlice,
  jobsSlice,
  scrollSlice,
  sidebarSlice,
  socketSlice,
} from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: adminPanel } = adminPanelSlice;
const { reducer: jobs } = jobsSlice;
const { reducer: scroll } = scrollSlice;

const reducer = combineReducers({ sidebar, socket, experiments, adminPanel, jobs, scroll });

export default reducer;
