import useActions from './useActions';

const useUtilities = () => {
  const {
    adminPanel: { setValue },
  } = useActions();

  return { setValue };
};

export default useUtilities;
