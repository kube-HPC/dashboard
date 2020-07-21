// @flow
import {SB_LABELS} from '@constants';
import {decorate} from '@storybookHelpers';
import {mixins} from '@styles';
import React, {useReducer, useRef, useState} from 'react';
import tw, {styled} from 'twin.macro';
import Input from './Input.react';

export const Default = () => <Input />;
export const WithActions = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState(``);
  const [isFocus, toggleFocus] = useReducer(p => !p, false);

  return (
    <>
      <span>{isFocus ? `Focused` : `Blurred`}</span>
      <span>Controlled Value: {value}</span>
      <Input
        role="combobox"
        innerRef={inputRef}
        value={value}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onChange={setValue}
      />
    </>
  );
};

const Decorator = styled.div`
  ${mixins.flexCenter}
  ${tw`flex-col`}
  ${mixins.fillScreen}
  ${Input.className} {
    ${tw`w-1/2`}
  }
`;

export default {
  title: `${SB_LABELS.ATOMS}${Input.name}`,
  decorators: decorate(Decorator),
};
