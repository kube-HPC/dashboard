import { getGraphOptions } from '@config';
import { GRAPH } from '@constants';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import VisGraph from 'vis-network-react';

const { defaultOptions } = GRAPH;
const NO_EVENTS = {};

const Container = styled.div`
  ${tw`h-full w-full`}
`;

const Graph = ({ className, graph, options = defaultOptions, events = NO_EVENTS }) => {
  const $options = useMemo(() => getGraphOptions({ ...defaultOptions, ...options }), [options]);
  const graphRef = useRef();

  useEffect(() => {
    graphRef.current.Network.setData(graph);
  }, [graph]);

  return (
    <Container className={className}>
      <VisGraph ref={graphRef} options={$options} events={events} />
    </Container>
  );
};

Graph.propTypes = {
  className: PropTypes.string,
  events: PropTypes.object,
  graph: PropTypes.object.isRequired,
  isLightTheme: PropTypes.bool,
  options: PropTypes.object,
};

Graph.className = Container;

const MemoGraph = memo(Graph);
MemoGraph.displayName = `Graph`;

export default MemoGraph;
