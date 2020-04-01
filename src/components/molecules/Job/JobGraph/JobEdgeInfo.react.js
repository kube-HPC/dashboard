import { mixins } from '@styles';
import { stringify } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col max-w-md truncate`}

  span {
    ${tw`truncate`}
  }
`;

const Item = ({ children }) => (
  <div>
    <span>{children}</span>
  </div>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

const JobEdgeInfo = ({ className, from: { input, ...restA }, to: { ...restB } }) => (
  <Container className={className}>
    <Item>Input</Item>
    <pre>{stringify(input)}</pre>
  </Container>
);

JobEdgeInfo.propTypes = {
  className: PropTypes.string,
  from: PropTypes.object.isRequired,
  to: PropTypes.object.isRequired,
};

JobEdgeInfo.SC = Container;

const MemoJobEdgeInfo = React.memo(JobEdgeInfo);
MemoJobEdgeInfo.displayName = `Edge Info`;

export default MemoJobEdgeInfo;
