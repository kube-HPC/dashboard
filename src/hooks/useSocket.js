import { useEffect } from 'react';
import useActions from './useActions';

const useSocket = () => {
  const {
    socket: { init },
  } = useActions();

  useEffect(() => {
    init();
  }, [init]);

  return {};
};

export default useSocket;
