import { Dropdown, Input, Scrollbar } from '@atoms';
import { mixins } from '@styles';
import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { styled, tw } from 'twin.macro';

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
        onChange={setFilterValue}
        placeholder={placeholder}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
      {filteredOptions.length !== 0 && (
        <Dropdown topOffset={offset} totalItems={filteredOptions.length} isVisible={isFocused}>
          <Scrollbar>
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
          </Scrollbar>
        </Dropdown>
      )}
    </Container>
  );
};

const Container = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col w-full relative space-y-2`}
`;

AutoSuggest.className = Container;
AutoSuggest.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default AutoSuggest;
