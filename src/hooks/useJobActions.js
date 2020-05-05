import { iconNames } from '@icons';
import { statusSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import useEye from './useEye';

const { redo, eye, fileDownload, stop, pause, play } = iconNames;
const pickedIcons = [redo, play, pause, stop, eye, fileDownload];
const createAction = jobId => action => () => action(jobId);

const useJobActions = jobId => {
  const {
    jobs: { downloadResults },
    pipelines: { rerunRaw, stopPipeline, resumePipeline, pausePipeline },
  } = useActions();

  const { canBeStopped, canBePaused, canBeDownload } = useSelector(statusSelector(jobId), isEqual);
  const { isEyed, toggleJobEye } = useEye(jobId);

  const isAvailable = useMemo(
    () => [
      true,
      !canBePaused && canBeStopped,
      canBePaused && canBeStopped,
      canBeStopped,
      !isEyed,
      canBeDownload,
    ],
    [canBeDownload, canBePaused, canBeStopped, isEyed],
  );

  const actions = useMemo(
    () =>
      [rerunRaw, resumePipeline, pausePipeline, stopPipeline, toggleJobEye, downloadResults].map(
        createAction(jobId),
      ),
    [downloadResults, jobId, pausePipeline, rerunRaw, resumePipeline, stopPipeline, toggleJobEye],
  );

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
