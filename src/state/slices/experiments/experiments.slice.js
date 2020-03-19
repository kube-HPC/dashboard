import { SOCKET } from '@config';
import { LOCAL_STORAGE } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { getLsItem } from '@utils';

const initialState = {
  dataSource: [],
  value: getLsItem(LOCAL_STORAGE.EXPERIMENT) || SOCKET.ROOM.default,
  lastValue: null,
  loading: true,
};

const experimentSlice = createSlice({
  name: `experiment`,
  initialState,
  reducers: {},
  extraReducers: {},
});

export default experimentSlice;
