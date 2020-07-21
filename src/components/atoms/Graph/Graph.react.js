// @flow
import {getGraphOptions} from '@config';
import {GRAPH} from '@constants';
import {mixins} from '@styles';
import type {GraphEdgeEntry, GraphNodeEntry} from '@types';
import React, {memo, useEffect, useMemo, useRef} from 'react';
import {styled} from 'twin.macro';
import VisGraph from 'vis-network-react';

const {defaultOptions} = GRAPH;
const NO_EVENTS = {};

const Container = styled.div`
  ${mixins.fillContainer}
`;

type GraphEntry = {
  edges: GraphEdgeEntry[],
  node: GraphNodeEntry[],
};

type GraphProps = {
  className?: string,
  graph: GraphEntry,
  options: typeof defaultOptions,
};

const Graph = ({className, graph, options = defaultOptions, events = NO_EVENTS}: GraphProps) => {
  const $options = useMemo(() => getGraphOptions({...defaultOptions, ...options}), [options]);
  const graphRef = useRef<null | {Network: {setData: (graph: GraphEntry) => void}}>(null);

  useEffect(() => {
    /* eslint-disable no-unused-expressions */
    graphRef.current?.Network.setData(graph);
  }, [graph]);

  return (
    <Container {...{className}}>
      <VisGraph {...{events}} ref={graphRef} options={$options} />
    </Container>
  );
};

Graph.className = Container;

const MemoGraph = memo<GraphProps>(Graph);
MemoGraph.displayName = `Graph`;

export default MemoGraph;
