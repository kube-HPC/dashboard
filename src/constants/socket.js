const socket = {
  ROOM: {
    default: `main`,
    showAll: `show-all`,
  },
  TOPIC: {
    PROGRESS: `progress`,
  },
  EVENTS: {
    NO_CONNECTIONS: [
      'disconnect',
      'connect_error',
      'connect_timeout',
      'error',
      'reconnect_attempt',
      'reconnecting',
      'reconnect_error',
      'reconnect_failed',
    ],
    CONNECTION: {
      connect: 'connect',
      reconnect: 'reconnect',
      experimentRegister: 'experiment-register',
    },
  },
};

export default socket;
