import { ADMIN_PANEL } from '@constants';
import { useActions } from '@hooks';
import { Welcome } from '@molecules';
import { JobPanel } from '@organisms';
import { useSelector } from 'react-redux';
import { createStore } from 'reusable';
import useJobs from './useJobs';

const { jobs, welcome } = ADMIN_PANEL;

const PANEL_CONTENT = {
  welcome: Welcome,
  jobs: JobPanel,
};

const useAdminPanel = () => {
  const {
    panel: { setValue, toggle },
  } = useActions();
  const { expanded } = useSelector(state => state.panel);

  const { selected } = useJobs();

  const mode = selected ? jobs : welcome;

  return { setValue, toggle, expanded, Content: PANEL_CONTENT[mode], mode };
};

export default createStore(useAdminPanel);
