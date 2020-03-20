import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`rounded-md bg-white p-4 text-center`}
`;

const Card = ({ className, children }) => <Container className={className}>{children}</Container>;

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
