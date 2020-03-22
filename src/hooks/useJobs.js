import { useSelector } from 'react-redux';

const useJobs = () => {
  const { dataSource: jobs } = useSelector(state => state.jobs);

  return { jobs };
};

export default useJobs;
