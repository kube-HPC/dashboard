import { counter, experiments, socket } from '@reducers';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({ counter, socket, experiments });

export default reducer;
