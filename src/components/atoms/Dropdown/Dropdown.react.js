import { onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { prop } from 'styled-tools';
import tw from 'twin.macro';

const variants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const ITEM_HEIGHT_PX = 30;
const DEFAULT_TOTAL_ITEMS = 10;
const EXTRA_OFFSET = 2;

const calcHeight = items =>
  (items > DEFAULT_TOTAL_ITEMS ? DEFAULT_TOTAL_ITEMS : items) * ITEM_HEIGHT_PX + EXTRA_OFFSET;

const Dropdown = ({ className, topOffset, totalItems = 0, isVisible = false, children }) => (
  <Container
    {...{ className, topOffset, variants }}
    height={calcHeight(totalItems)}
    animate={isVisible ? `visible` : `hidden`}
    initial="hidden">
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
  ${tw`overflow-hidden w-full absolute h-full rounded-sm border`}
  top: ${prop(`topOffset`)}px;
  height: ${prop(`height`)}px;
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
