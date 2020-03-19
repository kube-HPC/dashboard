import useActions from './useActions';

const useSidebar = () => {
  const { sidebar } = useActions();
  const { toggle, setValue } = sidebar;

  return { toggle, setValue };
};

export default useSidebar;
