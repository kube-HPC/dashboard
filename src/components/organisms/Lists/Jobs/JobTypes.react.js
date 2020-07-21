// @flow
import { Tag } from '@atoms';
import { useUserTheme } from '@hooks';
import { mixins } from '@styles';
import { tagViewSelector } from '@utils';
import { motion } from 'framer-motion';
import isEqual from 'lodash.isequal';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';

type TypesProps = {
  className?: string,
  types: Array<string>,
  onClick: () => void,
};

const JobTypes = ({ className, types, onClick }: TypesProps) => {
  const { theme } = useUserTheme();
  const [isHovered, setIsHovered] = useState(false);
  const areTagsVisible = useSelector(tagViewSelector);

  const whileHover = useCallback(() => setIsHovered(true), []);
  const onHoverEnd = useCallback(() => setIsHovered(false), []);

  return (
    <Types className={className}>
      {types.map(type => {
        const color = theme.colors.pipeline.type[type];
        return (
          <motion.div {...{ whileHover, onHoverEnd, onClick }} key={type}>
            {areTagsVisible || isHovered ? (
              <Tag {...{ color }}>{type}</Tag>
            ) : (
              <TagUnnamed {...{ color }} />
            )}
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

const Memo = React.memo<TypesProps>(JobTypes, isEqual);
Memo.displayName = `Job Types`;
export default Memo;
