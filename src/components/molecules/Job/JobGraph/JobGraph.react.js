import { Graph } from '@atoms';
import { useGraphInfo, usePointer } from '@hooks';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';
import MemoJobNodeInfo from './JobNodeInfo.react';

const Container = styled.div`
  ${ifProp(`isHovered`, tw`cursor-pointer`, tw`cursor-default`)}

  div.vis-tooltip {
    background-color: transparent;
    border: unset;
    border-radius: unset;
    font-family: unset;
    padding: unset;
    font-size: unset;
    color: unset;
    box-shadow: unset;
  }
`;

const JobGraph = ({ className, jobGraph, options }) => {
  const tooltipRef = useRef();

  const [tooltipRefState, setTooltipRefState] = useState();

  useEffect(() => {
    if (tooltipRef.current) {
      setTooltipRefState(tooltipRef.current);
    }
  }, []);

  const { graph, nodeInfo, edgeInfo, events } = useGraphInfo(jobGraph, tooltipRefState);
  const { xy } = usePointer();

  return (
    <Container className={className} isHovered={nodeInfo !== null}>
      <Graph graph={graph} options={options} events={events} />
      {/* {(nodeInfo || edgeInfo) && (
        <Tooltip {...xy}>
          {edgeInfo && <JobEdgeInfo {...edgeInfo} />}
          {nodeInfo && <JobNodeInfo {...nodeInfo} />}
        </Tooltip>
      )} */}
      <MemoJobNodeInfo innerRef={tooltipRef} {...nodeInfo} />
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
