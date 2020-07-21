// @flow
import { createSelector } from '@reduxjs/toolkit';
import type { SocketType } from './socket.slice';

export const isConnected = createSelector(
  state => state.socket,
  ({ isConnected }: SocketType) => isConnected,
);
