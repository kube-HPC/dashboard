import { filteredJobIds } from '@utils';
import isEqual from 'lodash.isequal';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const useJobs = () => {
  const selected = useSelector(state => state.jobs.selected);
  const jobIdList = useSelector(filteredJobIds, isEqual);

  const {
    jobs: { select },
  } = useActions();

  return { selected, select, jobIdList };
};

export default createStore(useJobs);
