import { onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import { prop } from 'styled-tools';
import { styled, tw } from 'twin.macro';

const ITEM_HEIGHT_PX = 30;
const DEFAULT_TOTAL_ITEMS = 10;
const EXTRA_OFFSET = 2;

const calcHeight = totalItems =>
  (totalItems > DEFAULT_TOTAL_ITEMS ? DEFAULT_TOTAL_ITEMS : totalItems) * ITEM_HEIGHT_PX +
  EXTRA_OFFSET;

/* No variants API usage because of dynamic height */
const visible = totalItems => ({ opacity: 1, height: calcHeight(totalItems) });
const hidden = { opacity: 0, height: 0 };

const Dropdown = ({ className, topOffset, totalItems = 0, isVisible = false, children }) => (
  <Container
    {...{ className, topOffset }}
    animate={isVisible ? visible(totalItems) : hidden}
    initial={hidden}>
    {children}
  </Container>
);

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
  ${tw`overflow-hidden w-full absolute h-full rounded-sm border text-left`}
  ${tw`z-40`}
  top: ${prop(`topOffset`)}px;
`;

Dropdown.Option = Option;
Dropdown.className = Container;
Dropdown.propTypes = {
  className: PropTypes.string,
  topOffset: PropTypes.number,
  totalItems: PropTypes.number,
  isVisible: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Dropdown;
