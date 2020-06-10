import { Button, Input, Radio } from '@atoms';
import { SETTINGS } from '@constants';
import { useSettings } from '@hooks';
import { MultiSelect } from '@molecules';
import { mixins } from '@styles';
import { onMode } from '@utils';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { ifProp } from 'styled-tools';
import tw, { styled } from 'twin.macro';

const SettingsPanel = ({ className }) => {
  const { logSource, setLogSource, experiments, addExperiment } = useSettings();
  const [experiment, setExperiment] = useState({ name: ``, description: `` });

  const onNameChange = useCallback(value => setExperiment(prev => ({ ...prev, name: value })), []);
  const onDescriptionChange = useCallback(
    value => setExperiment(prev => ({ ...prev, description: value })),
    [],
  );
  const onAddExperiment = () => addExperiment(experiment);

  return (
    <Container className={className}>
      <h1>Settings</h1>
      <Item>
        <span>Logs Source</span>
        <Radio value={logSource} onChange={setLogSource} options={SETTINGS.logSource} />
      </Item>
      <h1>Experiments</h1>
      <Experiments>
        {experiments.dataSource.map(({ name, description }) => {
          const isSelected = name === experiments.value;
          return (
            <Experiment key={name} isSelected={isSelected}>
              <div>{name}</div>
              <div>{description}</div>
              {/* {!isSelected && <Button>Remove</Button>} */}
            </Experiment>
          );
        })}
      </Experiments>
      <Item>
        <AddExperiment>
          <Input placeholder="Experiment Name" onChange={onNameChange} />
          <Input placeholder="Description" onChange={onDescriptionChange} />
        </AddExperiment>
      </Item>
      <Button onClick={onAddExperiment}>Add Experiment</Button>
    </Container>
  );
};

const AddExperiment = styled.div`
  ${mixins.flexStart}
  ${tw`space-x-2 w-full`}
`;

const Experiment = styled.div`
  ${mixins.flexBetween}
  ${mixins.opacityFocus}
  ${tw`border w-full p-2 cursor-pointer`}
  ${ifProp(`isSelected`, onMode(tw`border-black`, `border-yellow`))}
`;

const Experiments = styled.div`
  ${tw`space-y-2 w-full`}
`;

const Item = styled.div`
  ${mixins.flexBetween}
  ${tw`w-full`}
`;

const Container = styled.div`
  ${mixins.fillContainer}
  ${mixins.flexCenter}
  ${tw`space-y-4 flex-col`}
  ${MultiSelect.className} {
    ${tw`w-1/5`}
  }
`;

SettingsPanel.className = Container;
SettingsPanel.propTypes = {
  className: PropTypes.string,
};

export default SettingsPanel;
