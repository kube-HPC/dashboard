import { SOCKET } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';
import { disconnected } from './socket.reducers';

export let socket = null;

const {
  EVENTS: { CONNECTION, NO_CONNECTIONS },
  TOPIC: { PROGRESS },
  URL,
  CLIENT_CONFIG,
  STATE,
} = SOCKET;

const connectionEvents = Object.values(CONNECTION);
const noConnectionEvents = Object.values(NO_CONNECTIONS);

const toSocketRoom = value => (value ? `experiment:${value}` : null);

const getSocketRoom = ({ value, lastValue }) => ({
  name: toSocketRoom(value),
  lastRoom: toSocketRoom(lastValue),
});

export const register = createAsyncThunk(STATE.register, (_, { dispatch }) => {
  socket.on(PROGRESS, data => {
    dispatch({ type: STATE.pull, payload: data });
  });
});

export const connected = createAsyncThunk(STATE.connected, (_, { dispatch }) => {
  dispatch(register());
});

// TODO: Handle events in UI
export const init = createAsyncThunk(STATE.init, (_, { dispatch, getState }) => {
  socket = io(URL, CLIENT_CONFIG);

  const { experiments } = getState();

  connectionEvents.forEach(event => {
    socket.on(event, () => {
      const emitOptions = getSocketRoom(experiments);
      socket.emit(CONNECTION.register, emitOptions);
      dispatch(connected());
    });
  });

  noConnectionEvents.forEach(event =>
    socket.on(event, () => {
      dispatch(disconnected());
    }),
  );
});
