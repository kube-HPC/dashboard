import { mixins } from '@styles';
import { onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const variants = { visible: { opacity: 1 }, hidden: { opacity: 0 } };
const whileHover = { opacity: 0.5 };

const Selection = React.forwardRef(({ className, selected = [], onSelect, ...props }, ref) => {
  const genOnSelect = useCallback(
    (value, index) => e => {
      e.stopPropagation();
      onSelect(value, index);
    },
    [onSelect],
  );
  return (
    <Container {...{ ref, className }} tabIndex="0" animate="visible" initial="hidden" {...props}>
      {selected.map((value, index) => (
        <Option
          {...{ whileHover, variants }}
          key={index}
          role="button"
          onClick={genOnSelect(value, index)}>
          {value}
        </Option>
      ))}
      {selected.length === 0 && <InvisibleOption>Not Visible</InvisibleOption>}
    </Container>
  );
});

Selection.displayName = `Selection`;

const Option = styled(motion.div)`
  ${tw`inline-block border p-2 rounded-sm z-20`}
  ${onMode(tw`border-black`, tw`border-white`)}
`;

const InvisibleOption = styled(Option)`
  ${tw`invisible`}
`;

const Container = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`space-x-3 cursor-pointer`}
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
  innerRef: PropTypes.object,
  onSelect: PropTypes.func,
};

export default Selection;
