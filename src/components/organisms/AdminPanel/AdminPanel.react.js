import { Card, Expand } from '@components';
import { useAdminPanel } from '@hooks';
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
  ${tw`h-full`}
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
};

const AdminPanel = ({ className, children }) => {
  const { expanded, toggle } = useAdminPanel();
  return (
    <Container
      className={className}
      initial="compressed"
      animate={expanded ? `expanded` : `compressed`}
      variants={container}>
      <CardFlex>
        <TopRight>
          <Expand onClick={toggle} expanded={expanded} />
        </TopRight>
        {children}
      </CardFlex>
    </Container>
  );
};

AdminPanel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AdminPanel;
