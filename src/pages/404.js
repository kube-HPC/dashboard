import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const ErrorPage = ({ className }) => <Container className={className}>{`404 not found`}</Container>;

ErrorPage.propTypes = {
  className: PropTypes.string,
};

export default ErrorPage;
