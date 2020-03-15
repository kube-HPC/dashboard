import { socketSlice } from '@slices';
import { useEffect } from 'react';
import useAction from './useAction';

const {
  thunks: { init },
} = socketSlice;

const useSocket = () => {
  const initSocket = useAction(init);

  useEffect(() => {
    initSocket();
  }, [initSocket]);

  return {};
};

export default useSocket;
