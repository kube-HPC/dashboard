import { Graph, Tag } from '@atoms';
import { useGraphInfo, useUserTheme } from '@hooks';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import { ifProp } from 'styled-tools';
import tw, { styled } from 'twin.macro';
import JobNodeInfo from './JobNodeInfo.react';

const PORTAL_DELAY = 100;

const JobGraph = ({ className, jobGraph, options }) => {
  const [tooltipRef, setTooltipRef] = useState();
  const [isFirstReveal, setIsFirstReveal] = useState(false);

  const { graph, nodeInfo, events } = useGraphInfo(jobGraph, tooltipRef);

  const { isLightTheme } = useUserTheme();

  const themedOptions = useMemo(() => ({ ...options, isLightTheme }), [isLightTheme, options]);

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
      <Graph graph={graph} options={themedOptions} events={events} isLightTheme={isLightTheme} />
      <JobNodeInfo innerRef={setTooltipRef} isVisible={isFirstReveal} {...nodeInfo} />
    </Container>
  );
};

const Container = styled.div`
  ${mixins.fillContainer}
  ${ifProp(`isHovered`, tw`cursor-pointer`, tw`cursor-default`)}

  ${JobNodeInfo.className} {
    ${Tag.className} {
      ${tw`capitalize`}
    }
  }

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

JobGraph.className = Container;

JobGraph.propTypes = {
  className: PropTypes.string,
  jobGraph: PropTypes.object,
  options: PropTypes.object,
};

const MemoJobGraph = React.memo(JobGraph);
MemoJobGraph.displayName = `Job Graph`;

export default JobGraph;
