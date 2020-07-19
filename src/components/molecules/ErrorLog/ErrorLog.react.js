/* @flow */
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type ErrorLogProps = {
  className?: string,
};

export const ErrorLog = ({ className }: ErrorLogProps) => {
  const [state] = useState();
  return <Container {...{ className }}>{state}</Container>;
};

// const styledProps = {};

const Container = styled.div`
  ${tw``}
`;

ErrorLog.className = Container;
