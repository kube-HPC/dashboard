import { toBoolean } from '@utils';

const {
  BOARD_HOST,
  BOARD_PATH,
  BOARD_PORT,
  BOARD_USE_LOCATION,
  MONITOR_BACKEND_HOST,
  MONITOR_BACKEND_PATH_SOCKET,
  MONITOR_BACKEND_PATH,
  MONITOR_BACKEND_PORT,
  MONITOR_BACKEND_USE_LOCATION,
  IS_SECURE,
} = process.env;

const schema = `http${IS_SECURE ? 's' : ''}://`;

const defaultConnection = {
  host: 'localhost',
  port: '30010',
  path: '',
  socketIoPath: '',
};

// monitor server
const monitor = {
  host: MONITOR_BACKEND_HOST || defaultConnection.host,
  port: MONITOR_BACKEND_PORT || defaultConnection.port,
  path: MONITOR_BACKEND_PATH || defaultConnection.path,
  socketIoPath: MONITOR_BACKEND_PATH_SOCKET || defaultConnection.socketIoPath,
};

const board = {
  host: BOARD_HOST || defaultConnection.host,
  port: BOARD_PORT || defaultConnection.port,
  path: BOARD_PATH || defaultConnection.path,
};

const monitorUseLocation = toBoolean(MONITOR_BACKEND_USE_LOCATION);
const boardUseLocation = toBoolean(BOARD_USE_LOCATION);
const origin = location.origin;

const connectionConfig = {
  monitor: {
    url: monitorUseLocation
      ? `${origin}${monitor.path}`
      : `${schema}${monitor.host}:${monitor.port}${monitor.path}`,
    socketPath: monitor.socketIoPath,
  },
  board: boardUseLocation
    ? `${origin}${board.path}`
    : `${schema}${board.host}:${board.port}${board.path}`,
};

export default connectionConfig;
