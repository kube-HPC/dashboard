// @flow
import type { ErrorLogType } from '@slices';
import { COLORS } from '@styles';
import React from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import { prop } from 'styled-tools';
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
    <ServiceStatus>
      <Level color={COLORS.logs.level[level]} />
      <span>{serviceName}</span>
    </ServiceStatus>
    <span>{podName}</span>
    <Message>{message}</Message>
    <Moment format="DD/MM/YY HH:mm:ss">{timestamp}</Moment>
  </Container>
);

const styledProps = {
  color: `color`,
};

const Level = styled.div`
  ${tw`w-3 h-3`}
  ${prop(styledProps.color)}
  ${tw`bg-current rounded-full`}
`;

const ServiceStatus = styled.div`
  ${tw`grid grid-cols-3`}
  ${tw`items-center w-full`}
  > div {
    ${tw`col-span-1`}
  }
  > span {
    ${tw`font-bold truncate col-span-2`}
  }
`;

const Message = styled.span`
  ${tw`font-normal`}
`;

const gridCols = tw`grid-cols-5`;

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
