import PropTypes from 'prop-types';
import React from 'react';
import { styled } from 'twin.macro';

const Container = styled.div``;

const Notification = ({ className, title, children }) => (
  <Container className={className}>
    <h1>{title}</h1>
    {children}
  </Container>
);

Notification.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Notification;
