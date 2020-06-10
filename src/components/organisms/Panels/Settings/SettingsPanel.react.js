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
  const { logSource, setLogSource, experiments } = useSettings();

  const { value, add, set, remove, dataSource } = experiments;

  const [experiment, setExperiment] = useState({ name: ``, description: `` });

  const onNameChange = useCallback(value => setExperiment(prev => ({ ...prev, name: value })), []);
  const onDescriptionChange = useCallback(
    value => setExperiment(prev => ({ ...prev, description: value })),
    [],
  );
  const [selected, setSelected] = useState(value);
  const onAddExperiment = () => add(experiment);
  const onChangeExperiment = () => set(selected);
  const onDeleteExperiment = () => remove(selected);

  return (
    <Container className={className}>
      <h1>Settings</h1>
      <Item>
        <span>Logs Source</span>
        <Radio value={logSource} onChange={setLogSource} options={SETTINGS.logSource} />
      </Item>
      <h1>Experiments</h1>
      <Experiments>
        {dataSource.map(({ name, description }) => {
          const isSelected = name === selected;
          const isDefinedExperiment = name === value;
          const onClick = () => setSelected(name);
          return (
            <Experiment key={name} {...{ isDefinedExperiment, isSelected, onClick }}>
              <div>{name}</div>
              <div>{description}</div>
            </Experiment>
          );
        })}
        <Actions>
          <Button onClick={onChangeExperiment}>Set Experiment</Button>
          <Button onClick={onDeleteExperiment}>Delete Experiment</Button>
        </Actions>
      </Experiments>
      <hr />
      <AddExperiment>
        <Input placeholder="Experiment Name" onChange={onNameChange} />
        <Input placeholder="Description" onChange={onDescriptionChange} />
      </AddExperiment>
      <Button onClick={onAddExperiment}>Add Experiment</Button>
    </Container>
  );
};

const Actions = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full space-x-2`}
  ${Button.className} {
    ${tw`w-full`}
  }
`;

const AddExperiment = styled.div`
  ${mixins.flexCenter}
  ${tw`space-x-2 w-full`}
`;

const Experiment = styled.div`
  ${mixins.flexBetween}
  ${mixins.opacityFocus}
  ${tw`border w-full p-2 cursor-pointer`}
  ${ifProp(`isSelected`, onMode(tw`border-black`, `border-yellow`))}
  ${ifProp(`isDefinedExperiment`, tw`border-2`)}
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
