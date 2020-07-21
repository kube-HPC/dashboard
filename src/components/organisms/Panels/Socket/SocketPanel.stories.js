import { SB_LABELS } from '@constants';
import { decorate } from '@storybookHelpers';
import tw, { styled } from 'twin.macro';
import SocketPanel from './SocketPanel.react';

export const Default = SocketPanel;

const Decorator = styled.div`
  ${tw``}
`;

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Socket Panel`,
  component: SocketPanel,
  decorators: decorate(Decorator),
};
