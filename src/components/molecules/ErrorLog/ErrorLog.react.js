// @flow
import { Tag } from '@atoms';
import type { ErrorLogType } from '@slices';
import { COLORS } from '@styles';
import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import tw from 'twin.macro';

type ErrorLogProps = { className?: string, as?: string } & ErrorLogType;

export const ErrorLog = ({
  className,
  as,
  serviceName,
  podName,
  message,
  timestamp,
  level,
}: ErrorLogProps) => (
  <Container {...{ className, as }}>
    <ErrorType>
      <Tag color={COLORS.logs.level[level]}>
        <span>{level}</span>
      </Tag>
    </ErrorType>
    <ServiceName>{serviceName}</ServiceName>
    <span>{podName}</span>
    <Message>{message}</Message>
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

const gridCols = tw`grid-cols-6`;

const Container = styled.div`
  ${gridCols}
  ${tw`w-full grid gap-2 text-center`}
  ${Message} {
    ${tw`col-span-2`}
  }
  & > * {
    ${tw`truncate`}
  }
`;

ErrorLog.className = Container;
ErrorLog.gridColsCSS = gridCols;
