import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import useActions from './useActions';

const useSocket = () => {
  const {
    socket: {init},
  } = useActions();

  const {isConnected} = useSelector(state => state.socket);

  useEffect(() => {
    init();
  }, [init]);

  return {isConnected};
};

export default useSocket;
