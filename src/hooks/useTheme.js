import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const useTheme = () => {
  const theme = useSelector(state => state.theme, isEqual);

  const {
    theme: { setProperty },
  } = useActions();

  return { theme, setProperty };
};

export default createStore(useTheme);
