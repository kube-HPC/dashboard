import {GRAPH} from '@constants';
import {formatEdge, formatNode} from '@utils';
import {useEffect, useMemo, useRef, useState} from 'react';
import useActions from './useActions';
import useUserTheme from './useUserTheme';

const DEFAULT = {nodes: [], edges: []};

const useGraphInfo = (jobGraph, tooltipRef) => {
  const [graph, setGraph] = useState(DEFAULT);
  const {theme} = useUserTheme();

  const nodesMap = useRef();

  const [edgeInfo, setEdgeInfo] = useState();
  const [nodeInfo, setNodeInfo] = useState(null);

  const {
    jobs: {changeTaskId},
  } = useActions();

  const events = useMemo(
    () => ({
      selectNode: ({nodes}) => {
        const node = nodes?.[0] ?? null;
        const taskId = nodesMap.current[node].taskId;
        changeTaskId(taskId);
      },
      hoverNode: ({node}) => {
        setNodeInfo(nodesMap.current[node]);
      },
      blurNode: () => setNodeInfo(null),
      hoverEdge: ({edge}) => {
        const [from, to] = edge.split(GRAPH.idSeparator).map(id => nodesMap.current[id]);
        setEdgeInfo({from, to});
      },
      blurEdge: () => setEdgeInfo(null),
    }),
    [changeTaskId],
  );

  useEffect(() => {
    const nodes = jobGraph?.nodes.map(formatNode(theme.colors)) ?? [];
    const edges = jobGraph?.edges.map(formatEdge) ?? [];
    const nodesWithTooltip = nodes.map(node => ({...node, title: tooltipRef}));

    setGraph({nodes: nodesWithTooltip, edges});

    nodesMap.current = nodes.reduce(
      (acc, {nodeName, ...rest}) => ({...acc, [nodeName]: {...rest}}),
      {},
    );
  }, [jobGraph, tooltipRef, theme]);

  return {graph, edgeInfo, nodeInfo, events};
};

export default useGraphInfo;
