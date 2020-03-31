import { Card } from '@atoms';
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

const CardFlex = styled(Card)`
  ${mixins.flexBetween}
  ${tw`h-full flex-col`}
`;

const Content = styled.div`
  ${mixins.flexCenter}
  ${tw`flex-grow flex-col`}
`;

const TopRight = styled(motion.div)`
  ${mixins.flexEnd}
  ${tw`w-full self-start`}
`;

const container = {
  expanded: {
    width: `100%`,
    transition: {
      ...spring.gentle,
    },
  },
  compressed: {
    width: `25%`,
    transition: {
      ...spring.gentle,
    },
  },
  visible: {
    x: 0,
    scale: 1,
    transition: {
      ...spring.slow,
    },
  },
  hidden: {
    x: 300,
    scale: 0.5,
  },
};

const AdminPanel = ({ className, children }) => {
  const { expanded, toggle } = useAdminPanel();
  return (
    <Container
      className={className}
      initial={[`hidden`, `compressed`]}
      animate={[`visible`, expanded ? `expanded` : `compressed`]}
      variants={container}>
      <CardFlex>
        <TopRight>
          <IconExpand onClick={toggle} expanded={expanded} />
        </TopRight>
        <Content>{children}</Content>
      </CardFlex>
    </Container>
  );
};

AdminPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default AdminPanel;
