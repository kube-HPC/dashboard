import { iconNames } from '@icons';
import { NOOP, statusSelector } from '@utils';
import isEqual from 'lodash.isequal';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import useActions from './useActions';
import useEye from './useEye';

const { redo, eye, fileDownload, stop, pause, play, tag, eyeSlash } = iconNames;
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
      true,
      canBeDownload,
      !isEyed,
    ],
    [canBeDownload, canBePaused, canBeStopped, isEyed],
  );

  const actions = useMemo(
    () =>
      [
        rerunRaw,
        resumePipeline,
        pausePipeline,
        stopPipeline,
        toggleJobEye,
        downloadResults,
        NOOP,
      ].map(createAction(jobId)),
    [downloadResults, jobId, pausePipeline, rerunRaw, resumePipeline, stopPipeline, toggleJobEye],
  );

  const icons = useMemo(
    () =>
      [redo, play, pause, stop, isEyed ? eyeSlash : eye, fileDownload, tag].map((name, index) => ({
        name,
        action: actions[index],
        isAvailable: isAvailable[index],
      })),
    [actions, isAvailable, isEyed],
  );

  return { icons };
};

export default useJobActions;
