import { usePanel } from '@hooks';
import { IconExpand } from '@icons';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled(motion.div)`
  ${tw`h-full`}
  ${tw`w-1/4 sm:w-1/2`}
`;

const Card = styled.div`
  ${mixins.card}
  ${mixins.flexBetween}
  ${tw`h-full flex-col shadow-md`}
`;

const PanelContent = styled.div`
${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`flex-grow flex-col`}
`;

const TopRight = styled.div`
  ${mixins.flexEnd}
  ${tw`w-full`}
`;

const container = {
  expanded: {
    width: `100%`,
    transition: spring.gentle,
  },
  compressed: isMdQuery => ({
    width: isMdQuery ? `20%` : `40%`,
    transition: spring.gentle,
  }),
  visible: {
    x: 0,
    opacity: 1,
    transition: spring.slow,
  },
  hidden: {
    x: 600,
    opacity: 0,
  },
};

const Panel = ({ className }) => {
  const { expanded, toggle, Content, isMdQuery } = usePanel();

  // Don't pass the event onClick;
  const onClick = useCallback(() => toggle(), [toggle]);

  return (
    <Container
      className={className}
      custom={isMdQuery}
      initial={[`hidden`, `compressed`]}
      animate={[`visible`, expanded ? `expanded` : `compressed`]}
      variants={container}>
      <Card>
        <TopRight>
          <IconExpand onClick={onClick} expanded={expanded} />
        </TopRight>
        <PanelContent>
          <Content />
        </PanelContent>
      </Card>
    </Container>
  );
};

Panel.propTypes = {
  className: PropTypes.string,
};

export default Panel;
