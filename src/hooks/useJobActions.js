import { iconNames } from '@icons';
import { statusSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const { redo, fileDownload, stop, pause, play } = iconNames;

const pickedIcons = [redo, play, pause, stop, fileDownload];

const createAction = (payload, action) => () => action(payload);

const useJobActions = jobId => {
  const {
    jobs: { downloadResults },
    pipelines: { rerunRaw, stopPipeline, resumePipeline, pausePipeline },
  } = useActions();

  const { canBeStopped, canBePaused, canBeDownload } = useSelector(statusSelector(jobId), isEqual);

  const isAvailable = useMemo(
    () => [
      true,
      !canBePaused && canBeStopped,
      canBePaused && canBeStopped,
      canBeStopped,
      canBeDownload,
    ],
    [canBeDownload, canBePaused, canBeStopped],
  );

  const actions = useMemo(() => {
    const rerunAction = createAction(jobId, rerunRaw);
    const resumeAction = createAction(jobId, resumePipeline);
    const pauseAction = createAction(jobId, pausePipeline);
    const stopAction = createAction(jobId, stopPipeline);
    const downloadAction = createAction(jobId, downloadResults);

    const actions = [rerunAction, resumeAction, pauseAction, stopAction, downloadAction];

    return actions;
  }, [downloadResults, jobId, pausePipeline, rerunRaw, resumePipeline, stopPipeline]);

  const icons = useMemo(
    () =>
      pickedIcons.map((name, index) => ({
        name,
        action: actions[index],
        isAvailable: isAvailable[index],
      })),
    [actions, isAvailable],
  );

  return { icons };
};

export default useJobActions;
