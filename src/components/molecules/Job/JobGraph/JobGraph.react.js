import { Graph } from '@atoms';
import { useGraphInfo } from '@hooks';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';
import JobNodeInfo from './JobNodeInfo.react';

const Container = styled.div`
  ${mixins.fillContainer}
  ${ifProp(
    `isHovered`,
    tw`cursor-pointer`,
    tw`cursor-default`,
  )}

  /* Built-in tooltip reset */
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

const PORTAL_DELAY = 100;

const JobGraph = ({ className, jobGraph, options }) => {
  const [tooltipRef, setTooltipRef] = useState();
  const [isFirstReveal, setIsFirstReveal] = useState(false);

  const { graph, nodeInfo, events } = useGraphInfo(jobGraph, tooltipRef);

  useEffect(() => {
    // Need some delay for portal the tooltip to canvas
    if (!isFirstReveal && nodeInfo) {
      setTimeout(() => {
        setIsFirstReveal(true);
      }, PORTAL_DELAY);
    }
  }, [nodeInfo, isFirstReveal]);

  return (
    <Container className={className} isHovered={nodeInfo !== null}>
      <Graph graph={graph} options={options} events={events} />
      <JobNodeInfo innerRef={setTooltipRef} isVisible={isFirstReveal} {...nodeInfo} />
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
