import { Graph } from '@components';
import { formatEdge, formatNode } from '@utils';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`h-full w-full`}
`;

const DEFAULT = { nodes: [], edges: [] };

const JobGraph = ({ className, jobGraph, options }) => {
  const [graph, setGraph] = useState(DEFAULT);

  useEffect(() => {
    const nodes = jobGraph.nodes.map(formatNode);
    const edges = jobGraph.edges.map(formatEdge);
    setGraph({ nodes, edges });
  }, [jobGraph]);

  return (
    <Container className={className}>
      <Graph graph={graph} options={options} />
    </Container>
  );
};

JobGraph.SC = Container;

JobGraph.propTypes = {
  className: PropTypes.string,
  jobGraph: PropTypes.object.isRequired,
  options: PropTypes.object,
};

const MemoJobGraph = React.memo(JobGraph);
MemoJobGraph.displayName = `Job Graph`;

export default JobGraph;
