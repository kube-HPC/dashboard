// @flow
import {NOOP, onMode} from '@utils';
import {motion} from 'framer-motion';
import type {Node} from 'react';
import React, {useEffect, useState} from 'react';
import {ifProp, prop} from 'styled-tools';
import tw, {styled} from 'twin.macro';
import Scrollbar from '../Scrollbar/Scrollbar.react';

const ITEM_HEIGHT_PX = 30;
const DEFAULT_TOTAL_ITEMS = 5;
const EXTRA_OFFSET = 0;

const calcHeight = totalItems =>
  (totalItems > DEFAULT_TOTAL_ITEMS ? DEFAULT_TOTAL_ITEMS : totalItems) * ITEM_HEIGHT_PX +
  EXTRA_OFFSET;

const variants = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

// Dropdown.propTypes = {
// children: PropTypes.node,
// className: PropTypes.string,
// innerRef: PropTypes.object,
// isVisible: PropTypes.bool,
// onSelect: PropTypes.func,
// options: PropTypes.array,
// topOffset: PropTypes.number,
// totalItems: PropTypes.number,
// };

type DropdownProps = {
  children: Node,
  className?: string,
  innerRef: {current: null | HTMLDivElement},
  topOffset: number,
  isVisible: boolean,
  options: void | [],
  onSelect: (option: string, index: number) => void,
};

const Dropdown = ({
  className,
  topOffset,
  isVisible = true,
  children,
  options = undefined,
  onSelect = NOOP,
  innerRef,
  ...props
}: DropdownProps) => {
  const areOptions = Array.isArray(options);
  const totalItems = areOptions ? options.length : React.Children.count(children);
  const height = calcHeight(totalItems);
  const isAnimate = isVisible && totalItems > 0;
  const onClick = (value, index) => () => onSelect(value, index);

  const [isClickable, setIsClickable] = useState(isVisible);

  useEffect(() => {
    setTimeout(() => {
      setIsClickable(isVisible);
    }, 100);
  }, [isVisible]);

  return (
    <Container
      {...{className, topOffset, height, variants, ...props}}
      ref={innerRef}
      tabIndex="0"
      animate={isAnimate ? `visible` : `hidden`}
      isClickable={isClickable}
      initial="hidden">
      <Scrollbar>
        {areOptions
          ? options.map((value, index) => (
              <Option key={index} onClick={onClick(value, index)}>
                {value}
              </Option>
            ))
          : children}
      </Scrollbar>
    </Container>
  );
};

const Option = styled.button`
  ${onMode(tw`hocus:bg-gray-300`, tw`hocus:bg-gray-800`)}
  ${tw`transition-colors ease-in-out duration-300 p-1 truncate w-full text-left`}
  span:nth-child(2) {
    ${tw`font-semibold`}
  }
  height: ${ITEM_HEIGHT_PX}px;
`;

const Container = styled(motion.div)`
  top: ${prop(`topOffset`)}px;
  height: ${prop(`height`)}px;
  ${onMode(tw`border-black shadow-xl bg-white`, tw`border-white shadow-xlLight bg-gray-900`)}
  ${ifProp(`isClickable`, tw`pointer-events-auto`, tw`pointer-events-none`)}
  ${tw`overflow-hidden w-full rounded-sm border text-left`}
  ${tw`z-40 absolute`}
`;

Dropdown.Option = Option;
Dropdown.className = Container;

export default Dropdown;
