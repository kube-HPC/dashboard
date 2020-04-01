import { useAdminPanel } from '@hooks';
import { IconExpand } from '@icons';
import { mixins, spring } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled(motion.div)`
  ${tw`h-full`}
`;

const Card = styled.div`
  ${mixins.card}
  ${mixins.flexBetween}
  ${tw`h-full flex-col`}
`;

const PanelContent = styled.div`
  ${mixins.flexBetween}
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
  compressed: {
    width: `25%`,
    transition: spring.gentle,
  },
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
  const { expanded, toggle, Content } = useAdminPanel();

  return (
    <Container
      className={className}
      initial={[`hidden`, `compressed`]}
      animate={[`visible`, expanded ? `expanded` : `compressed`]}
      variants={container}>
      <Card>
        <TopRight>
          <IconExpand onClick={toggle} expanded={expanded} />
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
