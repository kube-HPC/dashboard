import { Tag } from '@atoms';
import { COLORS } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Types = styled.div`
  ${tw`absolute right-0 top-0 mr-5 capitalize`}
  ${tw`hidden lg:block`}
  ${Tag.SC}:not(:first-child) {
    ${tw`ml-2`}
  }
`;

const JobTypes = ({ className, types }) => (
  <Types className={className}>
    {types.map(type => (
      <Tag key={type} color={COLORS.pipeline.type[type]}>
        {type}
      </Tag>
    ))}
  </Types>
);

JobTypes.propTypes = {
  className: PropTypes.string,
  types: PropTypes.array,
};

export default JobTypes;