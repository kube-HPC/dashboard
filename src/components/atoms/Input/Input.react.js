import { onMode } from '@utils';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import { styled, tw } from 'twin.macro';

const Input = React.forwardRef(
  ({ className, value = ``, onChange, onFocus, onBlur, ...props }, ref) => {
    const [inputValue, setInputValue] = useState(value);
    const $onChange = useCallback(({ target: { value } }) => setInputValue(value), []);

    useEffect(() => {
      onChange(inputValue);
    }, [onChange, inputValue]);

    return (
      <$Input
        {...{ className, ref, onFocus, onBlur, ...props }}
        value={inputValue}
        onChange={$onChange}
      />
    );
  },
);

const $Input = styled.input`
  ${tw`rounded-sm w-full p-2 bg-transparent border outline-none`}
  ${tw`transition-colors ease-in-out duration-200 hocus:bg-gray-900`}
  ${onMode(tw`border-black shadow-xl`, tw`border-white shadow-xlLight`)}
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
