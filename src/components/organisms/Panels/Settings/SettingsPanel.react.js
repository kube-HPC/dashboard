import { Radio } from '@atoms';
import { SETTINGS } from '@constants';
import { useSettings } from '@hooks';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import tw, { styled } from 'twin.macro';

const SettingsPanel = ({ className }) => {
  const { logSource, setLogSource } = useSettings();
  return (
    <Container className={className}>
      <h1>Settings</h1>
      <Item>
        <span>Logs Source</span>
        <Radio value={logSource} onChange={setLogSource} options={SETTINGS.logSource} />
      </Item>
    </Container>
  );
};

const Item = styled.div`
  ${mixins.flexBetween}
  ${tw`w-full`}
`;

const Container = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`space-y-4 flex-col`}
`;

SettingsPanel.className = Container;
SettingsPanel.propTypes = {
  className: PropTypes.string,
};

export default SettingsPanel;
