import urls from './urls';

const {
  monitor: { socketPath, url },
} = urls;

const name = `socket`;

const socket = {
  URL: url,
  STATE: {
    name,
    init: `${name}/init`,
    listenToEvents: `${name}/listenToEvents`,
    connected: `${name}/connected`,
    register: `${name}/register`,
    disconnected: `${name}/disconnected`,
    pull: `${name}/pull`,
  },
  CLIENT_CONFIG: {
    path: socketPath,
    transports: [`websocket`],
  },
  ROOM: {
    default: `main`,
    showAll: `show-all`,
  },
  TOPIC: {
    PROGRESS: `PROGRESS`,
  },
  EVENTS: {
    NO_CONNECTIONS: {
      disconnect: `disconnect`,
      connectError: `connect_error`,
      connectTimeout: `connect_timeout`,
      error: `error`,
      reconnectAttempt: `reconnect_attempt`,
      reconnecting: `reconnecting`,
      reconnectError: `reconnect_error`,
      reconnectFailed: `reconnect_failed`,
    },
    CONNECTION: {
      connect: `connect`,
      reconnect: `reconnect`,
      register: `experiment-register`,
    },
  },
};

export default socket;
