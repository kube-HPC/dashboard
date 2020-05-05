import { useSelector } from 'react-redux';
import { eyeSelector } from 'utils/jobs';
import useActions from './useActions';

const useEye = jobId => {
  const isEyed = useSelector(eyeSelector(jobId));

  const {
    dashboard: { toggleJobEye },
  } = useActions();

  return { isEyed, toggleJobEye };
};

export default useEye;
