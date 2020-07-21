import {mixins} from '@styles';
import {NOOP, onMode} from '@utils';
import React from 'react';
import styled from 'styled-components';
import {ifProp} from 'styled-tools';
import tw from 'twin.macro';

type OnChangeFunc = () => void | ((option: string) => void);

type OptionType = {
  checked: boolean,
  children: Node,
  onChange: OnChangeFunc,
  value: String,
};

const Option = ({children, onChange = NOOP, checked = false}: OptionType) => (
  <Label onClick={onChange} {...{checked}}>
    <span>{children}</span>
  </Label>
);

type RadioTypes = {
  className?: string,
  onChange?: OnChangeFunc,
  options: string[],
  value: string,
};

const Radio = ({className, value, onChange = NOOP, children, options}: RadioTypes) => (
  <Container {...{className}}>
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
            <Option key={key} checked={value === option} {...{onChange: $onChange}}>
              {option}
            </Option>
          );
        })}
  </Container>
);

const Label = styled.label`
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

Radio.Option = Option;
Radio.className = Container;

export default Radio;
