import { getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
];

export default middleware;
