import { SB_LABELS, sidebarValues, topBarActionValues } from '@constants';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Menu from './Menu.react';

const Container = styled.div`
  ${tw`uppercase`}
`;

export default {
  title: `${SB_LABELS.ATOMS}Menu`,
  decorators: [
    S => (
      <Container>
        <S />
      </Container>
    ),
  ],
};

const mapToDivList = value => <div key={value}>{value}</div>;

export const Default = () => <Menu>{sidebarValues.map(mapToDivList)}</Menu>;
export const horizontal = () => <Menu horizontal>{topBarActionValues.map(mapToDivList)}</Menu>;
