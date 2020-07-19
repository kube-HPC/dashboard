// @flow
import { ERRORS, SOCKET } from '@config';
import { createSlice } from '@reduxjs/toolkit';

export type ErrorLogType = {
  hostName: string,
  id: string,
  level: string,
  message: string,
  podName: string,
  serviceName: string,
  timestamp: number,
  type: string,
  uptime: number,
};

export type ErrorStateProp = {
  logs: null | ErrorLogType[],
  totalNewWarnings: number,
};

const initialState: ErrorStateProp = { logs: null, totalNewWarnings: 0 };

export const errorsSlice = createSlice({
  name: ERRORS.STATE.name,
  initialState,
  extraReducers: {
    [SOCKET.STATE.pull]: (
      state: ErrorStateProp,
      { payload: { logs } }: { payload: { logs: ErrorLogType[] } },
    ) => {
      state.logs = logs;
    },
  },
});
