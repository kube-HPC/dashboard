import { Scrollbar } from '@atoms';
import { usePanel } from '@hooks';
import { IconExpand } from '@icons';
import { mixins, spring } from '@styles';
import { onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import tw, { styled } from 'twin.macro';

const container = {
  expanded: {
    width: `100%`,
    transition: spring.gentle,
  },
  compressed: isMdQuery => ({
    width: isMdQuery ? `30%` : `40%`,
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

  // Don't pass the event onClick, don't do this: (e) => toggle(e)
  const onClick = useCallback(() => toggle(), [toggle]);

  return (
    <Container
      className={className}
      custom={isMdQuery}
      initial={[`hidden`, `compressed`]}
      animate={[`visible`, expanded ? `expanded` : `compressed`]}
      variants={container}>
      <TopRight>
        <IconExpand onClick={onClick} expanded={expanded} />
      </TopRight>
      <Scrollbar>
        <ContentContainer>
          <Content />
        </ContentContainer>
      </Scrollbar>
    </Container>
  );
};

const ContentContainer = styled.div`
  ${tw`p-3 h-full`}
`;

const Container = styled(motion.div)`
  ${mixins.card}
  ${mixins.flexStart}
  ${tw`w-1/4 sm:w-1/2 h-full`}
  ${tw`flex-col`}
  ${onMode(tw`shadow-md`, tw`shadow-mdLight`)}
`;

const TopRight = styled.div`
  ${mixins.flexEnd}
  ${tw`w-full`}
`;

Panel.propTypes = {
  className: PropTypes.string,
};

export default Panel;
