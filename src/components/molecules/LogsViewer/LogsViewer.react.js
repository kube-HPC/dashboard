import { mixins } from '@styles';
import { toUpperCaseFirstLetter } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const LogsViewer = ({ className, logs }) => (
  <Container className={className}>
    {logs.map(({ timestamp, level, message }) => (
      // Remove ↵ from end of line
      <Message key={timestamp}>
        <span>{toUpperCaseFirstLetter(message.replace(/\u21b5/g, ``))}</span>
      </Message>
    ))}
  </Container>
);

const Container = styled.div`
  ${mixins.fillContainer}
`;

const Message = styled.div`
  ${tw`w-full`}
`;

LogsViewer.propTypes = {
  className: PropTypes.string,
  logs: PropTypes.array.isRequired,
};

export default LogsViewer;
