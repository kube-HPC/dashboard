import { getDefaultMiddleware } from '@reduxjs/toolkit';
// import { createLogger } from 'redux-logger';

// const logger = createLogger({ collapsed: true });
const middleware = [...getDefaultMiddleware()];

export default middleware;
