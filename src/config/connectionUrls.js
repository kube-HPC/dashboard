import { IS_WINDOW_DEFINED, toBoolean } from '@utils';
const schema = `http${process.env.IS_SECURE ? `s` : ``}://`;

const defaultConnection = {
  host: `localhost`,
  port: `30010`,
  path: ``,
  socketIoPath: ``,
};

// monitor server
const monitor = {
  host: process.env.MONITOR_BACKEND_HOST || defaultConnection.host,
  port: process.env.MONITOR_BACKEND_PORT || defaultConnection.port,
  path: process.env.MONITOR_BACKEND_PATH || defaultConnection.path,
  socketIoPath: process.env.MONITOR_BACKEND_PATH_SOCKET || defaultConnection.socketIoPath,
};

const board = {
  host: process.env.BOARD_HOST || defaultConnection.host,
  port: process.env.BOARD_PORT || defaultConnection.port,
  path: process.env.BOARD_PATH || defaultConnection.path,
};

const monitorUseLocation = toBoolean(process.env.MONITOR_BACKEND_USE_LOCATION);
const boardUseLocation = toBoolean(process.env.BOARD_USE_LOCATION);
const origin = IS_WINDOW_DEFINED ? window.location.origin : undefined;

const connectionConfig = {
  monitor: {
    url: monitorUseLocation
      ? `${origin}${monitor.path}`
      : `${schema}${monitor.host}:${monitor.port}`,
    socketPath: monitor.socketIoPath,
  },
  board: boardUseLocation
    ? `${origin}${board.path}`
    : `${schema}${board.host}:${board.port}${board.path}`,
};

/* eslint-disable no-console */
console.info(connectionConfig);

export default connectionConfig;
