import { Graph, Tooltip } from '@atoms';
import { useGraphInfo, usePointer } from '@hooks';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';
import JobEdgeInfo from './JobEdgeInfo.react';
import JobNodeInfo from './JobNodeInfo.react';

const Container = styled.div`
  ${tw`h-full w-full overflow-hidden`}
  ${ifProp(`isHovered`, tw`cursor-pointer`, tw`cursor-default`)}
  ${Tooltip.SC} {
    ${tw`max-w-md`}
  }
`;

const JobGraph = ({ className, jobGraph, options }) => {
  const { graph, nodeInfo, edgeInfo, events } = useGraphInfo(jobGraph);
  const { xy, containerRef } = usePointer();

  return (
    <Container className={className} ref={containerRef} isHovered={nodeInfo !== null}>
      <Graph graph={graph} options={options} events={events} />
      {(nodeInfo || edgeInfo) && (
        <Tooltip {...xy}>
          {edgeInfo && <JobEdgeInfo {...edgeInfo} />}
          {nodeInfo && <JobNodeInfo {...nodeInfo} />}
        </Tooltip>
      )}
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
