import { useActions } from '@hooks';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';

const useAdminPanel = () => {
  const { adminPanel } = useActions();
  const { expanded } = useSelector(state => state.adminPanel);
  const { setValue, toggle } = adminPanel;
  return { setValue, toggle, expanded };
};

export default createStore(useAdminPanel);
