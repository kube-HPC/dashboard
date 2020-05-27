import { mixins } from '@styles';
import { onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const variants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
const whileHover = { opacity: 0.5 };

const Selection = ({
  className,
  selected = [],
  onSelect,
  placeholder = `Placeholder`,
  innerRef,
  ...props
}) => {
  const genOnSelect = useCallback(
    (value, index) => e => {
      e.stopPropagation();
      onSelect(value, index);
    },
    [onSelect],
  );
  return (
    <Container
      {...{ className }}
      ref={innerRef}
      tabIndex="0"
      animate="visible"
      initial="hidden"
      {...props}>
      {selected.map((value, index) => (
        <Option
          {...{ whileHover, variants }}
          key={index}
          role="button"
          onClick={genOnSelect(value, index)}>
          {value}
        </Option>
      ))}
      {selected.length === 0 && <InvisibleOption>{placeholder}</InvisibleOption>}
    </Container>
  );
};

const Option = styled(motion.div)`
  ${tw`inline-block border p-1 rounded-sm z-20`}
  ${onMode(tw`border-black`, tw`border-white`)}
`;

const InvisibleOption = styled(Option)`
  ${tw`border-none`}
  ${tw`font-normal italic opacity-50`}
  ${onMode(tw`text-black`, tw`text-white`)}
`;

const Container = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`space-x-2 cursor-pointer`}
  ${tw`rounded-sm w-full bg-transparent border p-1`}
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
  placeholder: PropTypes.string,
  selected: PropTypes.arrayOf(PropTypes.string),
  innerRef: PropTypes.object,
  onSelect: PropTypes.func,
};

export default Selection;
