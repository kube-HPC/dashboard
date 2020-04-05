import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.card}
  ${tw`shadow-lg`}
`;

const Notification = ({ className, children }) => (
  <Container className={className}>{children}</Container>
);

Notification.SC = Container;

Notification.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Notification;
