import { ColorSettings } from '@molecules';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const ThemePanel = ({ className }) => (
  <Container className={className}>
    <ColorSettings />
  </Container>
);

ThemePanel.propTypes = {
  className: PropTypes.string,
};

export default ThemePanel;
