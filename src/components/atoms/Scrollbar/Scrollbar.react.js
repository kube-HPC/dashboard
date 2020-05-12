import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import Scrollbars from 'react-custom-scrollbars';
import styled from 'styled-components';
import Thumb from './Thumb.react';

const fill = { height: `100%`, width: `100%` };

const Scrollbar = ({ className, children, ...props }) => (
  <Container className={className}>
    <Scrollbars style={fill} renderThumbVertical={Thumb} {...props}>
      {children}
    </Scrollbars>
  </Container>
);

const Container = styled.div`
  ${mixins.fillContainer}
`;

Scrollbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Scrollbar;
