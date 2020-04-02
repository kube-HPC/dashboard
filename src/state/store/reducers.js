import { combineReducers } from '@reduxjs/toolkit';
import { experimentsSlice, jobsSlice, panelSlice, sidebarSlice, socketSlice } from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: panel } = panelSlice;
const { reducer: jobs } = jobsSlice;

const reducer = combineReducers({ sidebar, socket, experiments, panel, jobs });

export default reducer;
