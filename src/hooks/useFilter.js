import { filterSelector } from '@utils';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useActions from './useActions';

const useFilter = () => {
  const { dashboard } = useActions();
  const { setJobsFilter } = dashboard;

  const filters = useSelector(filterSelector);

  return { filters, setJobsFilter };
};

export default createStore(useFilter);
