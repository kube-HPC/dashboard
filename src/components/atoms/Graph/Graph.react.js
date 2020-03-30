import { getGraphOptions } from '@config';
import { GRAPH } from '@constants';
import debounce from 'lodash.debounce';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import VisGraph from 'vis-network-react';

const { defaultOptions } = GRAPH;

const Container = styled.div`
  ${tw`h-full w-full`}
`;

const Graph = ({ graph, options = defaultOptions }) => {
  const $options = useMemo(() => getGraphOptions({ ...defaultOptions, ...options }), [options]);

  const containerRef = useRef();
  const graphRef = useRef();

  useEffect(() => {
    const reSizer = debounce(() => {
      const height = containerRef.current.clientHeight;
      const width = containerRef.current.clientWidth;
      graphRef.current.Network.setSize(`${width}px`, `${height}px`);
      graphRef.current.Network.redraw();
    }, 1000);
    window.addEventListener(`resize`, reSizer);

    return () => {
      window.removeEventListener(`resize`);
    };
  }, []);

  return (
    <Container ref={containerRef}>
      <VisGraph ref={graphRef} graph={graph} options={$options} />
    </Container>
  );
};

Graph.propTypes = {
  graph: PropTypes.object.isRequired,
  options: PropTypes.object,
};

// const areEqual = ({ graph: a, options: opA }, { graph: b, options: opB }) =>
//   isEqual(a, b) && opA === opB;

const MemoGraph = memo(Graph);
MemoGraph.displayName = `Graph`;

export default MemoGraph;
