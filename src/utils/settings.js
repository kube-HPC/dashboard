import { LOG_SOURCE } from '@constants';

export const logSourceValueToKey = target =>
  Object.entries(LOG_SOURCE).find(([, value]) => value === target)?.[0];
