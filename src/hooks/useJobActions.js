import { iconNames } from '@icons';
import { statusSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';

const { redo, fileDownload, stop, pause, play } = iconNames;
const pickedIcons = [redo, play, pause, stop, fileDownload];
const createAction = jobId => action => () => action(jobId);

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

  const actions = useMemo(
    () =>
      [rerunRaw, resumePipeline, pausePipeline, stopPipeline, downloadResults].map(
        createAction(jobId),
      ),
    [downloadResults, jobId, pausePipeline, rerunRaw, resumePipeline, stopPipeline],
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
