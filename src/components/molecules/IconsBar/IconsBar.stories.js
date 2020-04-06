import { SB_LABELS } from '@constants';
import { iconNames } from '@icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import IconsBar from './IconsBar.react';

export default {
  title: `${SB_LABELS.MOLECULES}Icons Bar`,
};

const Button = styled.button`
  ${tw`border border-black m-2 p-2`}
`;

const { redo, play, pause, stop } = iconNames;
const icons = [redo, play, pause, stop];

export const Default = () => {
  const [value, setValue] = useState(``);
  const [isAvailable, setIsAvailable] = useState({});

  const iconsWithActions = icons.map(name => ({
    name,
    action: () => setValue(name),
    isAvailable: !isAvailable[name],
  }));

  return (
    <>
      <div>Clicked Icon: {value}</div>
      {icons.map(name => (
        <Button
          key={name}
          onClick={() => setIsAvailable(prev => ({ ...prev, [name]: !prev[name] }))}>
          Disable {name}
        </Button>
      ))}
      <IconsBar icons={iconsWithActions} reveal="hidden" />
    </>
  );
};
