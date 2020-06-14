import { Tag } from '@atoms';
import { useUserTheme } from '@hooks';
import { mixins } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const JobTypes = ({ className, types }) => {
  const { theme } = useUserTheme();
  const [isHovered, setIsHovered] = useState(false);

  const whileHover = useCallback(() => setIsHovered(true), []);
  const onHoverEnd = useCallback(() => setIsHovered(false), []);

  return (
    <Types className={className}>
      {types.map(type => {
        const color = theme.colors.pipeline.type[type];
        return (
          <motion.div {...{ whileHover, onHoverEnd }} key={type}>
            {isHovered ? <Tag {...{ color }}>{type}</Tag> : <TagUnnamed {...{ color }} />}
          </motion.div>
        );
      })}
    </Types>
  );
};

const Types = styled.div`
  ${mixins.flexEnd}
  ${tw`absolute right-0 top-0 mr-2 capitalize w-auto`}
  ${tw`space-x-2`}
  ${Tag.className} {
    ${tw`py-px`}
    :not(:first-child) {
      ${tw`ml-px lg:ml-2`}
    }
  }
`;

const TagUnnamed = styled(Tag)`
  ${tw`w-8 h-1`}
`;

JobTypes.propTypes = {
  className: PropTypes.string,
  types: PropTypes.array,
};

export default JobTypes;
