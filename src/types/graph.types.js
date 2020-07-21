export type BatchNode = {
  taskId: string,
  input: any[],
  output: {
    storageInfo: {
      path: string,
      size: number,
    },
    metadata: {},
  },
  podName: string,
  status: string,
  batchIndex: number,
  startTime: number,
  endTime: number,
};

export type GraphNode = {
  nodeName: string,
  batch?: BatchNode[],
} & BatchNode;
