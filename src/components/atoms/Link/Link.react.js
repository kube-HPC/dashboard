// @flow
import {mixins} from '@styles';
import {onMode} from '@utils';
import type {Node} from 'react';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

type LinkProps = {
  className?: string,
  href: string,
  label?: string,
  children: Node,
};

const Link = ({className, href, label, children}: LinkProps) => (
  <Href
    {...{className, href}}
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label={label}>
    {children}
  </Href>
);

const Href = styled.a`
  ${onMode(tw`text-blue-400 hocus:text-blue-500`, tw`text-blue-300 hocus:text-blue-200`)}
  ${mixins.timingNormal}
  ${tw`cursor-pointer transition-colors`}
`;

export default Link;
