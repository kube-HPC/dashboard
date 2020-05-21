import { Dropdown, Selection } from '@atoms';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { styled, tw } from 'twin.macro';

const MultiSelect = ({ className, selected = [], options, onSelect, onDeselect }) => {
  const [isVisible, setVisible] = useState(false);
  const [topOffset, setTopOffset] = useState(null);

  const inputRef = useRef();

  const onBlur = () => setVisible(false);
  const onFocus = () => setVisible(true);

  const $onDeselect = () => {
    onBlur();
    onDeselect();
  };

  useEffect(() => {
    setTopOffset(inputRef.current.offsetHeight);
  }, []);

  return (
    <Container {...{ className }}>
      <Selection
        {...{ onFocus, onBlur }}
        ref={inputRef}
        selected={selected}
        onSelect={$onDeselect}
      />
      <Dropdown {...{ isVisible, topOffset, options, onSelect }} />
    </Container>
  );
};

const Container = styled.div`
  ${tw`w-full relative space-y-2`}
`;

MultiSelect.className = Container;
MultiSelect.propTypes = {
  className: PropTypes.string,
  onDeselect: PropTypes.func,
  onSelect: PropTypes.func,
  options: PropTypes.array,
  selected: PropTypes.array,
};

export default MultiSelect;
