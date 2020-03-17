import { NOOP } from '@utils';
import PropTypes from 'prop-types';
import React, { Children, useEffect, useState } from 'react';
import { animated, config, useTrail } from 'react-spring';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const spring = {
  config: config.slow,
  opacity: 1,
  x: 0,
  from: { opacity: 0, x: -30 },
};

const itemStyle = tw`transition-colors ease-in-out duration-500 cursor-pointer
  text-secondary hocus:text-black text-center`;

const Item = styled(animated.div)`
  ${itemStyle};
  color: ${ifProp('selected', 'black')};
`;

const Items = styled.div`
  ${Item}:not(:first-child):not(:last-child) {
    ${tw`my-3`}
  }
`;

const Menu = ({ children, onChange = NOOP, className }) => {
  const trails = useTrail(Children.count(children), spring);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    onChange(selected);
  }, [onChange, selected]);

  return (
    <Items className={className}>
      {Children.map(children, (child, index) => {
        const key = child.key;
        const onClick = () => setSelected(key);
        return (
          <Item key={key} selected={selected === key} style={trails[index]} onClick={onClick}>
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
};

export default Menu;
