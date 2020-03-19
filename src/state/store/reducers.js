import { combineReducers } from '@reduxjs/toolkit';
import { experimentsSlice, sidebarSlice, socketSlice } from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiments } = experimentsSlice;

const reducer = combineReducers({ sidebar, socket, experiments });

export default reducer;
