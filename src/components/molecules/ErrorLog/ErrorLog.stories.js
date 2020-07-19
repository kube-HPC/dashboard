/* @flow */
import { SB_LABELS } from '@constants';
import { decorate } from '@storybookHelpers';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ErrorLog } from './ErrorLog.react';

export const Default = () => <ErrorLog />;

const Decorator = styled.div`
  ${tw``}
`;

export default {
  title: `${SB_LABELS.MOLECULES}${ErrorLog.name}`,
  component: ErrorLog,
  decorators: decorate(Decorator),
};
