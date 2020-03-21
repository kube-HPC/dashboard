import { combineReducers } from '@reduxjs/toolkit';
import { adminPanelSlice, experimentsSlice, jobsSlice, sidebarSlice, socketSlice } from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: adminPanel } = adminPanelSlice;
const { reducer: jobs } = jobsSlice;

const reducer = combineReducers({ sidebar, socket, experiments, adminPanel, jobs });

export default reducer;
