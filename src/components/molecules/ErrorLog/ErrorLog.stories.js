// @flow
import { RAW, SB_LABELS } from '@constants';
import { decorate } from '@storybookHelpers';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ErrorLog } from './ErrorLog.react';

export const Default = () => <ErrorLog {...RAW.error} />;

const Decorator = styled.div`
  ${tw`h-screen`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}${ErrorLog.name}`,
  component: ErrorLog,
  decorators: decorate(Decorator),
};
