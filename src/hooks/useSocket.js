import { listenToEvents, socketSlice } from '@slices';
import { useEffect } from 'react';
import useAction from './useAction';

const { init } = socketSlice.actions;

const useSocket = () => {
  const initSocket = useAction(init);
  const listen = useAction(listenToEvents);

  useEffect(() => {
    initSocket();
    listen();
  }, [initSocket, listen]);

  return {};
};

export default useSocket;
