import { mixins } from '@styles';
import { onMode } from '@utils';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

const Option = ({ children, checked = false }) => (
  <$Option {...{ checked }}>
    <span>{children}</span>
  </$Option>
);

const RadioSelect = ({ className, children, options }) => {
  const [state, setState] = useState();
  return (
    <Container className={className}>
      {children ? children : options.map((option, key) => <Option key={key}>{option}</Option>)}
    </Container>
  );
};

const $Option = styled.label`
  ${tw`px-2 cursor-pointer hocus:opacity-75`}
  ${tw`transition-opacity duration-300 ease-in-out`}
  ${onMode(tw``, tw``)}
`;

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`border px-1 py-2 rounded-sm divide-x`}
  ${onMode(tw`border-black shadow-xl`, tw`border-white shadow-xlLight`)}
`;

Option.propTypes = {
  children: PropTypes.node.isRequired,
};

RadioSelect.Option = Option;
RadioSelect.className = Container;
RadioSelect.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  options: PropTypes.array,
};

export default RadioSelect;
