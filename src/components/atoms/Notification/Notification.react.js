// @flow
import type {Node} from 'react';
import React from 'react';
import styled from 'styled-components';

type NotificationProps = {
  className?: string,
  title: string,
  children: Node,
};

const Notification = ({className, title, children}: NotificationProps) => (
  <Container className={className}>
    <h1>{title}</h1>
    {children}
  </Container>
);

const Container = styled.div``;

export default Notification;
