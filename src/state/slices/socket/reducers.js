import { SOCKET } from '@config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import io from 'socket.io-client';

let socket = null;

const {
  EVENTS: { CONNECTION, NO_CONNECTIONS },
  TOPIC: { PROGRESS },
  URL,
  CLIENT_CONFIG,
  STATE,
} = SOCKET;

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

// STATE.disconnected
export const disconnected = state => {
  state.isConnected = false;
};

// TODO: Handle events in UI
export const listenToEvents = createAsyncThunk(
  STATE.listenToEvents,
  (_, { dispatch, getState }) => {
    /* eslint-disable no-console */
    const { experiments } = getState();

    Object.values(CONNECTION).forEach(event => {
      socket.on(event, args => {
        const isConnected = event === (CONNECTION.connect || CONNECTION.register);

        if (isConnected) {
          const emitOptions = getSocketRoom(experiments);
          socket.emit(CONNECTION.register, emitOptions);
          dispatch(connected());
        } else {
          console.info(`${event}, ${args}`);
        }
      });
    });

    Object.values(NO_CONNECTIONS).forEach(event =>
      socket.on(event, args => {
        console.info(`${event}, ${args}`);
        dispatch(disconnected());
      }),
    );
  },
);

export const init = createAsyncThunk(STATE.init, (_, { dispatch }) => {
  socket = io(URL, CLIENT_CONFIG);
  dispatch(listenToEvents());
});
