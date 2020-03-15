import { toBoolean } from '@utils';

const schema = process.env.isSecure ? 'https://' : 'http://';

const defaultConnection = {
  host: 'localhost',
  port: '30010',
  path: '',
  socketIoPath: '',
};

const monitorServer = {
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

const connectionUrls = {
  monitor: monitorUseLocation
    ? `${location.origin}${monitorServer.path}`
    : `${schema}${monitorServer.host}:${monitorServer.port}${monitorServer.path}`,
  board: boardUseLocation
    ? `${location.origin}${board.path}`
    : `${schema}${board.host}:${board.port}${board.path}`,
};

export default connectionUrls;
