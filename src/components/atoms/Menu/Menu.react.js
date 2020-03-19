import { spring } from '@styles';
import { NOOP } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { Children, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const selected = css`
  ${tw`text-black font-semibold`}
`;

const Item = styled(motion.div)`
  ${tw`cursor-pointer text-secondary hocus:text-black text-center duration-300`};
  transition-property: color, font-weight;
  ${ifProp('selected', selected)};
`;

const Items = styled(motion.div)`
  ${Item}:not(:first-child):not(:last-child) {
    ${tw`my-3`}
  }
`;

const container = {
  visible: delayChildren => ({
    transition: {
      ...spring.slow,
      staggerChildren: 0.3,
      delayChildren,
    },
  }),
};

const item = {
  visible: {
    opacity: 1,
    x: 0,
    transition: spring.slow,
  },
  hidden: {
    opacity: 0,
    x: -20,
  },
};

const Menu = ({ children, onChange = NOOP, className, delayAnimation = 0, visible = true }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    onChange(selected);
  }, [onChange, selected]);

  return (
    <Items
      className={className}
      custom={delayAnimation}
      initial="hidden"
      animate={visible ? 'visible' : 'hidden'}
      variants={container}>
      {Children.map(children, child => {
        const key = child.key;
        const onClick = () => setSelected(key);
        return (
          <Item key={key} selected={selected === key} onClick={onClick} variants={item}>
            {child}
          </Item>
        );
      })}
    </Items>
  );
};

Menu.Item = Item;
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  delayAnimation: PropTypes.number,
  visible: PropTypes.bool,
};

export default Menu;
