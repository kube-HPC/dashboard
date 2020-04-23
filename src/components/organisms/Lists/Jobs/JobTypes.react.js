import { Tag } from '@atoms';
import { useTheme } from '@hooks';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Types = styled.div`
  ${tw`absolute right-0 top-0 mr-2 capitalize`}
  ${tw`hidden lg:block`}
  ${Tag.SC} {
    ${tw`py-px`}
    :not(:first-child) {
      ${tw`ml-px lg:ml-1`}
    }
  }
`;

const JobTypes = ({ className, types }) => {
  const { colors } = useTheme();
  return (
    <Types className={className}>
      {types.map(type => (
        <Tag key={type} color={colors.pipeline.type[type]}>
          {type}
        </Tag>
      ))}
    </Types>
  );
};

JobTypes.propTypes = {
  className: PropTypes.string,
  types: PropTypes.array,
};

export default JobTypes;
