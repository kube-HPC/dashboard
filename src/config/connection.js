const schema = process.env.isSecure ? 'https://' : 'http://';

const defaultConnection = {
  host: 'localhost',
  port: '30010',
  path: '',
  socketIoPath: '',
};

const connection = {
  monitorBackend: {
    host: process.env.MONITOR_BACKEND_HOST || defaultConnection.host,
    port: process.env.MONITOR_BACKEND_PORT || defaultConnection.port,
    path: process.env.MONITOR_BACKEND_PATH || defaultConnection.path,
    socketIoPath: process.env.MONITOR_BACKEND_PATH_SOCKET || defaultConnection.socketIoPath,
    schema,
  },
  board: {
    host: process.env.BOARD_HOST || 'localhost',
    port: process.env.BOARD_PORT || '30010',
    path: process.env.BOARD_PATH || '',
    schema,
  },
};

export default connection;
