import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Icon from '../Icons/Icon.react';

const Item = styled(motion.div)``;

const Container = styled.div`
  ${tw`relative`}
  ${Item} {
    ${tw`uppercase text-secondary`}
  }
  #front {
    ${tw`absolute z-10`}
  }
`;

const visible = { opacity: 1 };
const hidden = { opacity: 0 };

const IconNamed = ({ d, name }) => {
  const textControl = useAnimation();

  const onHoverStart = () => {
    textControl.start(visible);
  };
  const onHoverEnd = () => {
    textControl.start(hidden);
  };

  return (
    <Container>
      <Item id="front" onHoverStart={onHoverStart} onHoverEnd={onHoverEnd} whileHover={hidden}>
        <Icon d={d} />
      </Item>
      <Item animate={textControl} initial={hidden}>
        {name}
      </Item>
    </Container>
  );
};

IconNamed.propTypes = {
  d: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default IconNamed;
