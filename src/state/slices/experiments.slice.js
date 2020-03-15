import { LOCAL_STORAGE, SOCKET } from '@constants';
import { createSlice } from '@reduxjs/toolkit';
import { getLsItem } from '@utils';

const initialState = {
  dataSource: [],
  value: getLsItem(LOCAL_STORAGE.EXPERIMENT) || SOCKET.ROOM.default,
  lastValue: null,
  loading: true,
};

const experiments = createSlice({
  name: `experiments`,
  initialState,
  reducers: {},
  extraReducers: {},
});

const { actions, reducer } = experiments;

export default reducer;
