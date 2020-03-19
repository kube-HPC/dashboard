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

const experimentsSlice = createSlice({
  name: `experiments`,
  initialState,
  reducers: {},
  extraReducers: {},
});

export default experimentsSlice;
