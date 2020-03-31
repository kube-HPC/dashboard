import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Href = styled.a`
  ${tw`text-blue-400 cursor-pointer hocus:text-blue-500`}
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
