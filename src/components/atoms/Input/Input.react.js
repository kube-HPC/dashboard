import {NOOP, onMode} from '@utils';
import PropTypes from 'prop-types';
import React, {useCallback, useEffect, useState} from 'react';
import tw, {styled} from 'twin.macro';

const Input = React.forwardRef(({className, value = ``, onChange = NOOP, ...props}, ref) => {
  const [inputValue, setInputValue] = useState(value);
  const $onChange = useCallback(({target: {value}}) => setInputValue(value), []);

  useEffect(() => {
    onChange(inputValue);
  }, [onChange, inputValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return <InputInner {...{className, ref, ...props}} value={inputValue} onChange={$onChange} />;
});

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
Input.propTypes = {
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
