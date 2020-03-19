import { combineReducers } from '@reduxjs/toolkit';
import { experimentSlice, sidebarSlice, socketSlice } from '@slices';

const { reducer: socket } = socketSlice;
const { reducer: sidebar } = sidebarSlice;
const { reducer: experiment } = experimentSlice;

const reducer = combineReducers({ sidebar, socket, experiment });

export default reducer;
