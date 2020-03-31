import { GRAPH } from '@constants';
import { graphEdgeTypes } from '@hkube/consts';
import { COLORS } from '@styles';

const { BATCH } = GRAPH.types;

export const findNodeName = nodeName => node => node.nodeName === nodeName;

export const getTaskDetails = node =>
  node && node.batch && node.batch.length > 0
    ? node.batch
    : [{ taskId: node.taskId, podName: node.podName }];

export const nodeFinder = ({ graph, pipeline }) => nodeName => {
  const nodeData = graph && graph.nodes ? graph.nodes.find(findNodeName(nodeName)) : [];
  const node = pipeline.nodes.find(findNodeName(nodeName));
  const { jobId } = pipeline;

  const taskId =
    nodeData && nodeData.taskId ? nodeData.taskId : nodeData.batch && nodeData.batch[0].taskId;
  const podName =
    nodeData && nodeData.podName ? nodeData.podName : nodeData.batch && nodeData.batch[0].podName;
  const origInput = node ? node.input : [];
  const payload = {
    ...nodeData,
    jobId,
    taskId,
    nodeName,
    podName,
    origInput,
    batch: nodeData.batch || [],
  };

  return payload;
};

const handleTask = ({ status, ...node }) => ({ ...node, status, group: status });

const handleBatch = ({ batchInfo, ...rest }) => {
  const { completed, total, idle, running, errors } = batchInfo;
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
    status: `Idle:${idle}/Running:${running}/Total:${total}${errors > 0 ? `Errors:${errors}` : ``}`,
    group,
    ...rest,
  };
};

export const formatNode = task => {
  const isBatch = task.batchInfo;
  const { nodeName, algorithmName, status, extra, ...rest } = isBatch
    ? handleBatch(task)
    : handleTask(task);

  const node = {
    id: nodeName,
    label: isBatch ? `${nodeName} [${extra.batch}]` : nodeName,
    title: `${isBatch ? `${extra.groupName} - ` : ``}${nodeName} (${algorithmName}) [${status}]`,
  };

  const color = {
    background: COLORS.task.status[status],
  };

  return { nodeName, status, color: isBatch ? undefined : color, ...node, ...rest };
};

const { ALGORITHM_EXECUTION, WAIT_ANY } = graphEdgeTypes;
const dashedGroups = [ALGORITHM_EXECUTION, WAIT_ANY];

export const formatEdge = ({ from, to, edges }) => {
  const [group] = edges;
  const { type } = group;

  const edge = {
    id: `${from}->${to}`,
    dashes: dashedGroups.includes(type),
    title: type,
  };
  return { ...edge, from, to, group };
};

export const areEqualGraphs = (a, b) => a?.jobId === b?.jobId && a?.timestamp === b?.timestamp;
