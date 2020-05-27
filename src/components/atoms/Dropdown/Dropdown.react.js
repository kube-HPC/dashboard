import { NOOP, onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { prop } from 'styled-tools';
import { styled, tw } from 'twin.macro';
import Scrollbar from '../Scrollbar/Scrollbar.react';

const ITEM_HEIGHT_PX = 30;
const DEFAULT_TOTAL_ITEMS = 5;
const EXTRA_OFFSET = 2;

const calcHeight = totalItems =>
  (totalItems > DEFAULT_TOTAL_ITEMS ? DEFAULT_TOTAL_ITEMS : totalItems) * ITEM_HEIGHT_PX +
  EXTRA_OFFSET;

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Dropdown = ({
  className,
  topOffset,
  isVisible = true,
  children,
  options = undefined,
  onSelect = NOOP,
  ...props
}) => {
  const areOptions = Array.isArray(options);
  const totalItems = areOptions ? options.length : React.Children.count(children);
  const height = calcHeight(totalItems);
  const isAnimate = isVisible && totalItems > 0;
  const onClick = (value, index) => () => onSelect(value, index);

  return (
    <Container
      {...{ className, topOffset, ...props }}
      tabIndex="0"
      animate={isAnimate ? `visible` : `hidden`}
      height={height}
      variants={variants}
      initial="hidden">
      <Scrollbar>
        {areOptions
          ? options.map((value, index) => (
              <Option key={index} role="button" onClick={onClick(value, index)}>
                <span>{value}</span>
              </Option>
            ))
          : children}
      </Scrollbar>
    </Container>
  );
};

const Option = styled.div`
  ${onMode(tw`hocus:bg-gray-800`, tw`hocus:bg-gray-800`)}
  ${tw`transition-colors ease-in-out duration-300 p-1 truncate`}
  span:nth-child(2) {
    ${tw`font-semibold`}
  }
  height: ${ITEM_HEIGHT_PX}px;
`;

const Container = styled(motion.div)`
  ${onMode(tw`bg-white`, tw`bg-gray-900`)}
  ${onMode(tw`border-black shadow-xl`, tw`border-white shadow-xlLight`)}
  ${tw`overflow-hidden w-full rounded-sm border text-left`}
  ${tw`z-40 absolute`}
  top: ${prop(`topOffset`)}px;
  height: ${prop(`height`)}px;
`;

Dropdown.Option = Option;
Dropdown.className = Container;
Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  options: PropTypes.array,
  topOffset: PropTypes.number,
  totalItems: PropTypes.number,
  onSelect: PropTypes.func,
};

export default Dropdown;
