import { NOOP, onMode } from '@utils';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';

const Input = React.forwardRef(({ className, value = ``, onChange = NOOP, ...props }, ref) => {
  const [inputValue, setInputValue] = useState(value);
  const $onChange = useCallback(({ target: { value } }) => setInputValue(value), []);

  useEffect(() => {
    onChange(inputValue);
  }, [onChange, inputValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return <$Input {...{ className, ref, ...props }} value={inputValue} onChange={$onChange} />;
});

const $Input = styled.input`
  &::placeholder {
    ${tw`font-normal italic opacity-50`}
    ${onMode(tw`text-black`, tw`text-white`)}
  }
  ${tw`rounded-sm w-full p-2 bg-transparent border`}
  ${tw`transition-colors ease-in-out duration-200`}
  ${onMode(
    tw`border-black shadow-xl shadow-2xl hocus:bg-gray-300`,
    tw`border-white shadow-xlLight hocus:shadow-2xlLight hocus:bg-gray-900`,
  )}
`;

Input.displayName = `Input`;
Input.className = $Input;
Input.propTypes = {
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
