import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const horizontal = css`
  ${tw`min-w-full w-full h-px my-2`}
`;

const vertical = css`
  ${tw`min-h-full w-px h-5 mx-2 inline-block relative`}
  top: 0.2rem;
`;

const Container = styled.div`
  ${tw`bg-gray-400 clearfix`}
  ${ifProp(`vertical`, vertical, horizontal)}
`;

const Divider = ({ className, vertical }) => (
  <Container className={className} vertical={vertical} role="separator" />
);

Divider.propTypes = {
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

export default Divider;