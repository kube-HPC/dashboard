import { mixins } from '@styles';
import { NOOP, onMode } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import { ifProp } from 'styled-tools';
import tw, { styled } from 'twin.macro';

const Option = ({ children, onChange = NOOP, checked = false }) => (
  <$Option onClick={onChange} {...{ checked }}>
    <span>{children}</span>
  </$Option>
);

const Radio = ({ className, value, onChange = NOOP, children, options }) => (
  <Container {...{ className }}>
    {children
      ? React.Children.map(children, (child, key) => {
          const childValue = child.props.value;
          const onChangeValue = () => onChange(childValue);
          return React.cloneElement(child, {
            key,
            checked: childValue === value,
            onChange: child.props.onChange || onChangeValue,
          });
        })
      : options.map((option, key) => {
          const $onChange = () => onChange(option);
          return (
            <Option key={key} checked={value === option} {...{ onChange: $onChange }}>
              {option}
            </Option>
          );
        })}
  </Container>
);

const $Option = styled.label`
  ${tw`px-2 cursor-pointer hocus:opacity-50`}
  ${tw`transition-opacity duration-300 ease-in-out`}
  span {
    &:after {
      content: '';
      ${mixins.timingNormal}
      ${tw`w-full h-px block transition-colors bg-transparent`}
      ${ifProp(`checked`, onMode(tw`bg-black`, tw`bg-white`))}
    }
  }
`;

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`border px-1 py-2 rounded-sm divide-x`}
  ${onMode(tw`border-black shadow-xl divide-black`, tw`border-white shadow-xlLight divide-white`)}
`;

Option.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

Radio.Option = Option;
Radio.className = Container;
Radio.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  value: PropTypes.any,
};

export default Radio;
