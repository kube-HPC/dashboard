import { ADMIN_PANEL, MEDIA_QUERIES } from '@constants';
import { useActions } from '@hooks';
import { Welcome } from '@molecules';
import { JobPanel } from '@organisms';
import { useMediaQuery } from 'beautiful-react-hooks';
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

  const isMdQuery = useMediaQuery(MEDIA_QUERIES.md);
  const { selected } = useJobs();

  const mode = selected ? jobs : welcome;

  return { setValue, toggle, expanded, Content: PANEL_CONTENT[mode], mode, isMdQuery };
};

export default createStore(useAdminPanel);
