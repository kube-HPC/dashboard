import {SB_LABELS} from '@constants';
import React from 'react';
import Dropdown from './Dropdown.react';

const options = [...Array(20).keys()].map(key => `Option-${key}`);

export const Default = () => <Dropdown options={options} />;
export const WithChildren = () => (
  <Dropdown totalItems={3}>
    {options.map(option => (
      <Dropdown.Option key={option} role="button">
        <span>{option}</span>
      </Dropdown.Option>
    ))}
  </Dropdown>
);

export default {
  title: `${SB_LABELS.ATOMS}${Dropdown.name}`,
  component: Dropdown,
};
