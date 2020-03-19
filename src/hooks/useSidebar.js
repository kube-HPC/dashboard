import { useSelector } from 'react-redux';
import useActions from './useActions';

const useSidebar = () => {
  const { sidebar } = useActions();
  const { toggle, setValue } = sidebar;

  const { visible, value } = useSelector(state => state.sidebar);

  return { visible, toggle, value, setValue };
};

export default useSidebar;
