import { GRAPH } from '@constants';
import { graphEdgeTypes } from '@hkube/consts';

const { STATUS, BATCH } = GRAPH.types;

const sameStatus = [STATUS.SKIPPED, STATUS.FAILED];
const completedStatus = [STATUS.SUCCEED];
const notStartedStatus = [STATUS.CREATING, STATUS.PENDING];

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

/* eslint-disable indent */
const toStatus = status =>
  completedStatus.includes(status)
    ? STATUS.COMPLETED
    : notStartedStatus.includes(status)
    ? STATUS.NOT_STARTED
    : sameStatus.includes(status)
    ? status
    : STATUS.RUNNING;

const handleSingle = node => ({ ...node, group: toStatus(node.status) });

const handleBatch = ({ nodeName, algorithmName, batchInfo, level = 0 }) => {
  const { completed, total, idle, running, errors } = batchInfo;
  let _completed = 0;
  let group = null;
  if (completed === total) {
    _completed = total;
    group = BATCH.COMPLETED;
  } else if (idle === total) {
    _completed = 0;
    group = BATCH.NOT_STARTED;
  } else {
    _completed = running + completed;
    group = BATCH.RUNNING;
  }
  if (errors > 0) {
    group = BATCH.ERRORS;
  }
  return {
    nodeName,
    algorithmName,
    extra: {
      batch: `${_completed}/${total}`,
    },
    group,
    level,
  };
};

const handleNode = n => (!n.batchInfo ? handleSingle(n) : handleBatch(n));

export const formatNode = n => {
  const { nodeName, ...rest } = handleNode(n);

  const batch = rest?.extra?.batch;

  const node = {
    id: nodeName,
    label: batch ? `${nodeName} [${batch}]` : nodeName,
    title: nodeName,
  };

  return { ...rest, ...node, nodeName };
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
