import { Dropdown, Selection } from '@atoms';
import { useOnClickOutside } from '@hooks';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

const MultiSelect = ({ className, selected = [], options, onSelect, onDeselect }) => {
  const [isVisible, setVisible] = useState(false);
  const [topOffset, setTopOffset] = useState(null);
  const inputRef = useRef();
  const containerRef = useRef();

  const onFocus = () => setVisible(true);

  const onClickOutside = useCallback(() => setVisible(false), []);
  useOnClickOutside(containerRef, onClickOutside);

  useEffect(() => {
    setTopOffset(inputRef.current.offsetHeight);
  }, []);

  return (
    <Container {...{ className }} ref={containerRef}>
      <Selection {...{ onFocus, selected }} ref={inputRef} onSelect={onDeselect} />
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
