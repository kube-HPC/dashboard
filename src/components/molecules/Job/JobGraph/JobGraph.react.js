import { Graph } from '@components';
import { formatEdge, formatNode } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`h-full w-full`}
`;

const JobGraph = ({ className, jobGraph }) => {
  const graph = {
    edges: [],
    nodes: [],
  };

  const { nodes = [], edges = [] } = jobGraph;
  nodes.forEach(n => graph.nodes.push(formatNode(n)));
  edges.forEach(e => graph.edges.push(formatEdge(e)));

  const isValidGraph = graph.nodes.length !== 0;

  return (
    <Container className={className}>
      {isValidGraph ? <Graph graph={graph} /> : `No Nodes`}
    </Container>
  );
};

JobGraph.SC = Container;

JobGraph.propTypes = {
  className: PropTypes.string,
  jobGraph: PropTypes.object.isRequired,
};

export default JobGraph;
