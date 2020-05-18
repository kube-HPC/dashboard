import { Dropdown, Input, Scrollbar } from '@atoms';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const AutoSuggest = ({ className, options = [], placeholder, onChange }) => {
  const [selected, setSelected] = useState(null);
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

  const filteredOptions = options.filter(option => option.label.includes(filterValue));

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
      {filteredOptions.length !== 0 && (
        <Dropdown topOffset={offset} totalItems={filteredOptions.length} isVisible={isFocused}>
          <Scrollbar>
            {filteredOptions.map((option, index) => {
              const { value, label } = option;
              const onClick = () => {
                setSelected(value);
                setFilterValue(label);
              };
              const startIndex = label.indexOf(filterValue);
              const prefix = label.slice(0, startIndex);
              const suffix = label.slice(startIndex + filterValue.length, label.length);
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
