// @flow
import { useErrors } from '@hooks';
import { ErrorLog } from '@molecules';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type ErrorsProps = {
  className?: string,
};

export const ErrorsPanel = ({ className }: ErrorsProps) => {
  const { logs } = useErrors();
  return (
    <Container {...{ className }}>
      <Header>
        <span>Service Name</span>
        <span>Pod Name</span>
        <Message>Message</Message>
        <span>Time Stamp</span>
      </Header>
      <ErrorsList>
        {logs.map(({ id, ...props }) => (
          <ErrorLog {...props} key={id} as="li" />
        ))}
      </ErrorsList>
    </Container>
  );
};

const Message = styled.span``;
const Header = styled.header`
  ${ErrorLog.gridColsCSS}
  ${tw`grid text-center border-b py-2`}
  > span {
    ${tw`font-semibold`}
  }
  ${Message} {
    ${tw`col-span-2`}
  }
`;

const ErrorsList = styled.ul`
  ${tw`space-y-2`}
`;

const Container = styled.section`
  ${tw`space-y-2`}
`;

ErrorsPanel.className = Container;
