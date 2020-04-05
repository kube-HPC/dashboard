import { REST } from '@config';
import { createSlice } from '@reduxjs/toolkit';
import { post } from './rest.thunks';

const rest = createSlice({
  name: REST.STATE.name,
  extraReducers: {
    [post.fulfilled]: (state, action) => {
      /* eslint-disable no-console*/
      console.info(`post success`, action.payload);
    },
  },
});

export default rest;