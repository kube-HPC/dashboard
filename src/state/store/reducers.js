import { combineReducers } from '@reduxjs/toolkit';
import { adminPanelSlice, experimentsSlice, sidebarSlice, socketSlice } from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;
const { reducer: adminPanel } = adminPanelSlice;

const reducer = combineReducers({ sidebar, socket, experiments, adminPanel });

export default reducer;
