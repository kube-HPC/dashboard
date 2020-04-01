import { GRAPH } from '@constants';
import { formatEdge, formatNode } from '@utils';
import { useEffect, useMemo, useRef, useState } from 'react';

const DEFAULT = { nodes: [], edges: [] };

const useGraphInfo = (jobGraph, tooltipRef) => {
  const [graph, setGraph] = useState(DEFAULT);

  const nodesMap = useRef();

  const [edgeInfo, setEdgeInfo] = useState();
  const [nodeInfo, setNodeInfo] = useState(null);

  const events = useMemo(
    () => ({
      selectNode: () => {},
      hoverNode: ({ node }) => {
        setNodeInfo(nodesMap.current[node]);
      },
      blurNode: () => setNodeInfo(null),
      hoverEdge: ({ edge }) => {
        const [from, to] = edge.split(GRAPH.idSeparator).map(id => nodesMap.current[id]);
        setEdgeInfo({ from, to });
      },
      blurEdge: () => setEdgeInfo(null),
    }),
    [],
  );

  useEffect(() => {
    const nodes = jobGraph.nodes.map(formatNode);
    const edges = jobGraph.edges.map(formatEdge);

    console.log(tooltipRef);

    const nodesTool = nodes.map(node => ({ ...node, title: tooltipRef }));

    setGraph({ nodes: nodesTool, edges });

    nodesMap.current = nodes.reduce(
      (acc, { nodeName, ...rest }) => ({ ...acc, [nodeName]: { ...rest } }),
      {},
    );
  }, [jobGraph, tooltipRef]);

  return { graph, edgeInfo, nodeInfo, events };
};

export default useGraphInfo;
