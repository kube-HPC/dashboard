import { mixins, spring } from '@styles';
import { NOOP, onMode } from '@utils';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { Children, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const styleOnSelect = (lightProp, darkProp) => ifProp(`selected`, onMode(lightProp, darkProp));

const whileHover = {
  opacity: 0.4,
  transition: { duration: 0.5 },
};

const Item = styled(motion.div)`
  ${mixins.colorOnFocus}
  ${mixins.textSecondary}
  ${mixins.timingSlow}
  ${tw`transition-opacity transition-colors text-center`};
  ${styleOnSelect(tw`text-black`, tw`text-white`)}

  span {
    ${tw`inline-block`}
    &:after {
      content: '';
      ${mixins.timingNormal}
      ${tw`w-full h-px block transition-colors bg-transparent`}
      ${styleOnSelect(tw`bg-black`, tw`bg-white`)}
    }
  }
`;

const horizontal = css`
  ${tw`flex-row`}
  ${Item}:not(:last-child) {
    ${tw`mr-5 md:mr-8 lg:mr-10`}
  }
`;

const vertical = css`
  ${tw`flex-col`}
  ${Item}:not(:last-child) {
    ${tw`mb-3`}
  }
`;

const Items = styled(motion.div)`
  ${mixins.flexCenter}
  ${tw`text-xs lg:text-sm xl:text-base`}
  ${ifProp(`horizontal`, horizontal, vertical)}
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
    y: 0,
    transition: spring.slow,
  },
  hidden: horizontal => ({
    opacity: 0,
    [horizontal ? `y` : `x`]: -20,
  }),
};

const Menu = ({
  children,
  onChange = NOOP,
  className,
  delayAnimation = 0,
  visible = true,
  horizontal = false,
}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    onChange(selected);
  }, [onChange, selected]);

  return (
    <Items
      className={className}
      horizontal={horizontal}
      custom={delayAnimation}
      initial="hidden"
      animate={visible ? `visible` : `hidden`}
      variants={container}>
      {Children.map(children, child => {
        const key = child.key;
        const onClick = () => setSelected(key);
        return (
          <Item
            custom={horizontal}
            key={key}
            selected={selected === key}
            whileHover={whileHover}
            onClick={onClick}
            variants={item}>
            <span>{child}</span>
          </Item>
        );
      })}
    </Items>
  );
};

Menu.SC = {
  Item,
  Items,
};
Menu.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  className: PropTypes.string,
  delayAnimation: PropTypes.number,
  visible: PropTypes.bool,
  horizontal: PropTypes.bool,
};

export default Menu;
