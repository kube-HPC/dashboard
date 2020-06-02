import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

const Settings = ({ className }) => {
  const [state, setState] = useState();
  return (
    <Container className={className}>
      <h1>Settings</h1>
    </Container>
  );
};

const Container = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`space-y-2 flex-col`}
`;

Settings.className = Container;
Settings.propTypes = {
  className: PropTypes.string,
};

export default Settings;
