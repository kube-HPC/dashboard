import useActions from './useActions';

const useUtilities = () => {
  const {
    panel: { setValue },
  } = useActions();

  return { setValue };
};

export default useUtilities;
