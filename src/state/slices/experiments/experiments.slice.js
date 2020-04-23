import { SOCKET } from '@config';
import { LOCAL_STORAGE } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { getLocalStorageItem } from '@utils';

const initialState = {
  dataSource: [],
  value: getLocalStorageItem(LOCAL_STORAGE.EXPERIMENT) || SOCKET.ROOM.default,
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
