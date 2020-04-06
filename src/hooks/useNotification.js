import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const useNotification = () => {
  const { notifications } = useSelector(state => state.notifications);

  const {
    notifications: { add, remove },
  } = useActions();

  return { notifications, add, remove };
};

export default createStore(useNotification);
