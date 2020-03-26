import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  ${mixins.card}
`;

const Card = ({ className, children, ...props }) => (
  <Container className={className} {...props}>
    {children}
  </Container>
);

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
