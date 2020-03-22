import { getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';

// const logger = createLogger({ collapsed: true });

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
];

export default middleware;
