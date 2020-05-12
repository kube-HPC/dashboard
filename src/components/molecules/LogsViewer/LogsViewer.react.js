import { toUpperCaseFirstLetter } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

/* eslint-disable no-unused-vars */
const LogsViewer = ({ className, logs }) => (
  <Container className={className}>
    {logs.map(({ timestamp, level, message }, index) => (
      // Remove ↵ from end of line
      <Message key={index}>
        <span>{toUpperCaseFirstLetter(message.replace(/\u21b5/g, ``))}</span>
      </Message>
    ))}
  </Container>
);

const Container = styled.div`
  ${tw`text-left`}
`;

const Message = styled.div`
  ${tw`w-full`}
`;

LogsViewer.propTypes = {
  className: PropTypes.string,
  logs: PropTypes.array.isRequired,
};

export default LogsViewer;
