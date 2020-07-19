// @flow
import { Tag } from '@atoms';
import type { ErrorLogType } from '@slices';
import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import tw from 'twin.macro';

type ErrorLogProps = {
  className?: string,
} & ErrorLogType;

export const ErrorLog = ({
  className,
  serviceName,
  podName,
  message,
  timestamp,
  level,
  uptime,
}: ErrorLogProps) => (
  <Container {...{ className }}>
    <ErrorType>
      <Tag>
        <span>{level}</span>
      </Tag>
    </ErrorType>
    <ServiceName>{serviceName}</ServiceName>
    <span>{podName}</span>
    <Message>{message}</Message>
    <Moment format="HH:mm:ss">{uptime}</Moment>
    <Moment format="DD/MM/YY HH:mm:ss">{timestamp}</Moment>
  </Container>
);

const ErrorType = styled.div`
  ${tw`h-full`}
`;
const ServiceName = styled.span`
  ${tw`font-bold`}
`;

const Message = styled.span`
  ${tw`font-normal`}
`;
const Container = styled.div`
  ${tw`w-full grid grid-cols-7 gap-2 text-center`}
  ${Message} {
    ${tw`col-span-2`}
  }
  & > * {
    ${tw`truncate`}
  }
`;

ErrorLog.className = Container;
