import { SB_LABELS } from '@constants';
import React from 'react';
import { styled, tw } from 'twin.macro';
import LogsViewer from './LogsViewer.react';

const Decorator = styled.div`
  ${tw`w-screen h-screen`}
`;

export default {
  title: `${SB_LABELS.MOLECULES}Logs Viewer`,
  decorators: [
    S => (
      <Decorator>
        <S />
      </Decorator>
    ),
  ],
};

const logs = [
  { timestamp: 1588869272028, level: `info`, message: `connected to ws://127.0.0.1:3000↵` },
  { timestamp: 1588869272085, level: `info`, message: `got message from worker: initialize↵` },
  {
    timestamp: 1588869272085,
    level: `info`,
    message: `sending message to worker: initialized↵`,
  },
  { timestamp: 1588869272086, level: `info`, message: `got message from worker: start↵` },
  { timestamp: 1588869272086, level: `info`, message: `sending message to worker: started↵` },
  { timestamp: 1588869273089, level: `info`, message: `sending message to worker: done↵` },
];

export const Example = () => <LogsViewer logs={logs} />;
