import { counter, socket } from '@reducers';
import { combineReducers } from '@reduxjs/toolkit';

const reducer = combineReducers({ counter, socket });

export default reducer;
