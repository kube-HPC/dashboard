import { Tag } from '@atoms';
import { COLORS, mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
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

const JobNodeInfo = ({
  className,
  endTime,
  podName,
  retries,
  startTime,
  status,
  taskId,
  warnings,
}) => (
  <Container className={className}>
    <div>
      <span>Status:</span>
      <Tag color={COLORS.task.status[status]}>{status}</Tag>
    </div>
    {podName ? <Item>Pod Name: {podName}</Item> : `Batch Info`}
    {taskId ? <Item>TaskId: {taskId}</Item> : `Batch Tasks`}
    <div>
      <span>StartTime: </span>
      <Moment format="DD/MM/YY HH:mm:ss">{startTime}</Moment>
    </div>
    <div>
      <span>EndTime: </span>
      <Moment format="DD/MM/YY HH:mm:ss">{endTime}</Moment>
    </div>
    {warnings && <Item>Warnings: {warnings.length}</Item>}
    {retries && <Item>Retries: {retries}</Item>}
  </Container>
);

JobNodeInfo.propTypes = {
  className: PropTypes.string,
  endTime: PropTypes.number,
  podName: PropTypes.string,
  retries: PropTypes.number,
  startTime: PropTypes.number,
  status: PropTypes.string.isRequired,
  taskId: PropTypes.string.isRequired,
  warnings: PropTypes.number,
};

JobNodeInfo.SC = Container;

const MemoJobNodeInfo = React.memo(JobNodeInfo);
MemoJobNodeInfo.displayName = `Node Info`;

export default MemoJobNodeInfo;
