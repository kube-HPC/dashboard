import { Dropdown, Input } from '@atoms';
import { mixins } from '@styles';
import { NOOP } from '@utils';
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

const AutoSuggest = ({ className, options = [], placeholder, onChange = NOOP }) => {
  const [filterValue, setFilterValue] = useState(``);

  const [isFocused, toggleFocus] = useReducer(p => !p, false);
  const [offset, setOffset] = useState(null);

  const inputRef = useRef();

  useEffect(() => {
    setOffset(inputRef.current.offsetHeight);
  }, []);

  useEffect(() => {
    onChange(filterValue);
  }, [filterValue, onChange]);

  const filteredOptions = options.filter(option => option.includes(filterValue));

  return (
    <Container className={className}>
      <Input
        ref={inputRef}
        role="combobox"
        value={filterValue}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onChange={setFilterValue}
        placeholder={placeholder}
      />
      <Dropdown topOffset={offset} totalItems={filteredOptions.length} isVisible={isFocused}>
        {filteredOptions.map((option, index) => {
          const onClick = () => setFilterValue(option);
          const startIndex = option.indexOf(filterValue);
          const prefix = option.slice(0, startIndex);
          const suffix = option.slice(startIndex + filterValue.length, option.length);
          return (
            <Dropdown.Option key={index} role="button" onClick={onClick}>
              <span>{prefix}</span>
              <span>{filterValue}</span>
              <span>{suffix}</span>
            </Dropdown.Option>
          );
        })}
      </Dropdown>
    </Container>
  );
};

const Container = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col w-full relative space-y-2`}
`;

const Memo = React.memo(AutoSuggest, isEqual);

Memo.displayName = `Auto Suggest`;
Memo.className = Container;
AutoSuggest.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default Memo;
