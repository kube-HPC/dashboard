// @flow
import {NOOP, onMode} from '@utils';
import React, {useCallback, useEffect, useState} from 'react';
import tw, {styled} from 'twin.macro';

type InputProps = {
  className?: string,
  onChange?: (value: string | void) => void,
  value?: string,
  innerRef?: {current: null | HTMLDivElement},
  onBlur?: () => void,
  onFocus?: () => void,
  role?: string,
};

const Input = ({className, value = ``, onChange = NOOP, innerRef, ...props}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const $onChange = useCallback(({target: {value}}) => setInputValue(value), []);

  useEffect(() => {
    onChange(inputValue);
  }, [onChange, inputValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <InputInner {...{className, ...props}} ref={innerRef} value={inputValue} onChange={$onChange} />
  );
};

const InputInner = styled.input`
  &::placeholder {
    ${tw`font-normal italic opacity-50`}
    ${onMode(tw`text-black`, tw`text-white`)}
  }
  ${tw`rounded-sm w-full p-2 bg-transparent border`}
  ${tw`transition-colors transition-opacity ease-in-out duration-200 hocus:opacity-50`}
  ${onMode(tw`border-black shadow-lg`, tw`border-white shadow-xlLight`)}
`;

Input.displayName = `Input`;
Input.className = InputInner;

export default Input;
