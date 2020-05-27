import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Label = ({ title, children }) => (
  <Container>
    <span>{title}:</span>
    {children}
  </Container>
);

const Container = styled.div`
  & span {
    ${tw`inline-block mr-2`}
    &:first-child {
      ${tw`font-semibold`}
    }
  }
`;

Label.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Label;
