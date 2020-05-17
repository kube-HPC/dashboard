import { mixins } from '@styles';
import { onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import tw from 'twin.macro';
import Scrollbar from '../Scrollbar/Scrollbar.react';

const optionHeightPx = 30;

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const AutoSuggest = ({ className, options = [], isSuggestion = false }) => {
  const [selected, setSelected] = useState(null);
  const [filterValue, setFilterValue] = useState(``);
  const [isFocused, toggleFocus] = useReducer(p => !p, false);
  const [offset, setOffset] = useState(null);

  const inputRef = useRef();
  const onChange = ({ target: { value } }) => setFilterValue(value);

  useEffect(() => {
    setOffset(inputRef.current.offsetHeight);
  }, []);

  return (
    <Container className={className}>
      <Input
        ref={inputRef}
        role="combobox"
        value={filterValue}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        onChange={onChange}
      />
      {isSuggestion && options.length !== 0 && (
        <Dropdown
          topOffset={offset}
          totalItems={options.length}
          animate={isFocused ? `visible` : `hidden`}
          variants={variants}>
          <Scrollbar>
            {options
              .filter(option => option.label.includes(filterValue))
              .map((option, index) => {
                const { value, label } = option;
                const onClick = () => {
                  setSelected(value);
                  setFilterValue(label);
                };
                const startIndex = label.indexOf(filterValue);
                const prefix = label.slice(0, startIndex);
                const suffix = label.slice(startIndex + filterValue.length, label.length);
                return (
                  <Option key={index} role="button" onClick={onClick}>
                    <span>{prefix}</span>
                    <span>{filterValue}</span>
                    <span>{suffix}</span>
                  </Option>
                );
              })}
          </Scrollbar>
        </Dropdown>
      )}
    </Container>
  );
};

const Option = styled.div`
  height: ${optionHeightPx}px;
  ${tw`transition-colors ease-in-out duration-300`}
  ${tw`p-1 truncate`}
  ${onMode(tw`hocus:bg-gray-800`, tw`hocus:bg-gray-800`)}
  span:nth-child(2) {
    ${tw`font-semibold`}
  }
`;

const DEFAULT_TOTAL_ITEMS = 10;
const EXTRA_OFFSET = 2;

const dropDownHeight = ({ totalItems }) =>
  (totalItems > DEFAULT_TOTAL_ITEMS ? DEFAULT_TOTAL_ITEMS : totalItems) * optionHeightPx +
  EXTRA_OFFSET;

const Dropdown = styled(motion.div)`
  ${onMode(tw`bg-white`, tw`bg-gray-900`)}
  ${tw`overflow-hidden w-full absolute h-full`}
  top: ${prop(`topOffset`)}px;
  height: ${dropDownHeight}px;
`;

const Input = styled.input`
  ${tw`rounded-sm w-full`}
  ${tw`p-2 bg-transparent`}
`;

const Container = styled.div`
  ${mixins.flexStart}
  ${tw`flex-col w-full relative space-y-2`}
  ${Input},${Dropdown} {
    ${tw`border`}
    ${onMode(tw`border-black shadow-xl`, tw`border-white shadow-xlLight`)}
  }
`;

AutoSuggest.className = Container;
AutoSuggest.propTypes = {
  className: PropTypes.string,
  options: PropTypes.array,
  isSuggestion: PropTypes.bool,
};

export default AutoSuggest;
