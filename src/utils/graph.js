import {GRAPH} from '@constants';
import {graphEdgeTypes} from '@hkube/consts';
import {GraphNode} from '@types';

const {BATCH} = GRAPH.types;

export const findNodeName = (nodeName: string) => (node: GraphNode) => node.nodeName === nodeName;

export const getTaskDetails = (node: GraphNode) =>
  node && node.batch && node.batch.length > 0
    ? node.batch
    : [{taskId: node.taskId, podName: node.podName}];

const handleTask = ({status, ...node}) => ({...node, status, group: status});

const handleBatch = ({batchInfo, ...rest}) => {
  const {completed, total, idle, running, errors} = batchInfo;
  let _completed = running + completed;
  let group = BATCH.RUNNING;

  if (completed === total) {
    _completed = total;
    group = BATCH.COMPLETED;
  } else if (idle === total) {
    _completed = 0;
    group = BATCH.NOT_STARTED;
  }

  if (errors > 0) {
    group = BATCH.ERRORS;
  }

  return {
    extra: {
      batch: `${_completed}/${total}`,
      groupName: group,
    },
    status: `${idle ? `Idle:${idle}/` : ``}${running ? `Running:${running}/` : ``}Total:${total}${
      errors ? `/Errors:${errors}` : ``
    }`,
    group,
    ...rest,
  };
};

export const formatNode = colors => task => {
  const isBatch = task.batchInfo !== undefined;
  const {nodeName, status, extra, ...rest} = isBatch ? handleBatch(task) : handleTask(task);

  const node = {
    id: nodeName,
    label: isBatch ? `${nodeName} [${extra.batch}]` : nodeName,
  };

  // tw macro adds opacity var, need to remove it
  const color = isBatch
    ? undefined
    : {background: colors.task.status[status]?.replace(`, var(--text-opacity)`, ``)};

  return {nodeName, status, color, ...node, ...rest};
};

const {ALGORITHM_EXECUTION, WAIT_ANY} = graphEdgeTypes;
const dashedGroups = [ALGORITHM_EXECUTION, WAIT_ANY];

export const formatEdge = ({from, to, edges}) => {
  const [group] = edges;
  const {type} = group;

  const edge = {
    id: `${from}${GRAPH.idSeparator}${to}`,
    dashes: dashedGroups.includes(type),
  };
  return {...edge, from, to, group};
};

export const areEqualGraphs = (a, b) => a?.jobId === b?.jobId && a?.timestamp === b?.timestamp;
