import { SOCKET } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';

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

// TODO: Handle events in UI
export const init = createAsyncThunk(STATE.init, (_, { dispatch, getState }) => {
  socket = io(URL, CLIENT_CONFIG);

  const { jobs } = getState();

  connectionEvents.forEach(event => {
    socket.on(event, () => {
      const emitOptions = getSocketRoom(jobs.experiments);
      socket.emit(CONNECTION.register, emitOptions);
      dispatch({ type: STATE.connected });
    });
  });

  socket.on(PROGRESS, data => {
    dispatch({ type: STATE.pull, payload: data });
  });

  noConnectionEvents.forEach(event =>
    socket.on(event, () => {
      dispatch({ type: STATE.disconnected });
    }),
  );
});

export const changeRoom = createAsyncThunk(STATE.init, (_, { getState }) => {
  const {
    jobs: { experiments },
  } = getState();

  const { name, lastRoom } = getSocketRoom(experiments);
  socket.emit(CONNECTION.register, { name, lastRoom });
});
