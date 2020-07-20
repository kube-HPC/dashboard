// @flow
import { errorsSelector } from '@selectors';
import type { ErrorLogType } from '@slices';
import { useSelector } from 'react-redux';

type ErrorsHook = {
  logs: ErrorLogType[],
};

export const useErrors = (): ErrorsHook => {
  const logs = useSelector(errorsSelector);
  return { logs };
};
