import { mixins } from '@styles';
import { onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import { tw } from 'twin.macro';

const variants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
const whileHover = { opacity: 0.5 };

const Selection = ({ className, selected, onSelect }) => {
  const genOnSelect = useCallback((value, index) => () => onSelect(value, index), [onSelect]);
  return (
    <Container className={className} animate="visible" initial="hidden">
      {selected.map((value, index) => (
        <Option
          key={index}
          role="button"
          whileHover={whileHover}
          onClick={genOnSelect(value, index)}
          variants={variants}>
          {value}
        </Option>
      ))}
      {selected.length === 0 && <InvisibleOption>Not Visible</InvisibleOption>}
    </Container>
  );
};

const Option = styled(motion.div)`
  ${tw`inline-block border p-2 mx-2 rounded-sm`}
  ${onMode(tw`border-black`, tw`border-white`)}
`;

const InvisibleOption = styled(Option)`
  ${tw`invisible`}
`;

const Container = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`rounded-sm w-full p-2 bg-transparent border`}
  ${tw`transition-shadow ease-in-out duration-200`}
  ${onMode(
    tw`border-black shadow-xl hocus:shadow-2xl`,
    tw`border-white shadow-xlLight hocus:shadow-2xlLight`,
  )}
`;

Selection.Option = Option;
Selection.className = Container;
Selection.propTypes = {
  className: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func,
};

export default Selection;
