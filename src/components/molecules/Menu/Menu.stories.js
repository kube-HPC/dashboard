import { SIDEBAR, TOP_BAR } from '@config';
import { SB_LABELS } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Menu from './Menu.react';

const Container = styled.div`
  ${tw`uppercase`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Menu`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

const mapToDivList = value => <div key={value}>{value}</div>;

export const Default = () => <Menu>{SIDEBAR.values.map(mapToDivList)}</Menu>;
export const horizontal = () => <Menu horizontal>{TOP_BAR.values.map(mapToDivList)}</Menu>;
