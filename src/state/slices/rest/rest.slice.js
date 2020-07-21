import { REST } from '@config';
import { createSlice } from '@reduxjs/toolkit';

const rest = createSlice({
  name: REST.STATE.name,
});

export default rest;
