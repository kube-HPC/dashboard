import { mixins } from '@styles';
import { onMode } from '@utils';
import PropTypes from 'prop-types';
import React from 'react';
import { styled, tw } from 'twin.macro';

const Href = styled.a`
  ${onMode(tw`text-blue-400 hocus:text-blue-500`, tw`text-blue-300 hocus:text-blue-200`)}
  ${mixins.timingNormal}
  ${tw`cursor-pointer transition-colors`}
`;

const Link = ({ className, href, label, children }) => (
  <Href
    className={className}
    href={href}
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label={label}>
    {children}
  </Href>
);

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Link;
