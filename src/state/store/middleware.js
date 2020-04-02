import { getDefaultMiddleware } from '@reduxjs/toolkit';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: true,
    immutableCheck: true,
  }),
];

export default middleware;
