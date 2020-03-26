import { createSlice } from '@reduxjs/toolkit';
import { setIndexes } from './scroll.reducers';

const initialState = { indexes: [0, 10] };

const scrollSlice = createSlice({
  name: `scroll`,
  initialState,
  reducers: { setIndexes },
});

export default scrollSlice;
