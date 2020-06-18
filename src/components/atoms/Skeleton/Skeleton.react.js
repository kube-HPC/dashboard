// @flow
import { mixins } from '@styles';
import { motion } from 'framer-motion';
import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import useResizeObserver from 'use-resize-observer';

type SkeletonProps = {
  className?: string,
};

const variants = {
  hidden: {
    x: 0,
  },
  visible: width => ({
    x: width,
  }),
  transition: { duration: 1.2, loop: Infinity },
};

const SIZE = 50;

const Skeleton = ({ className }: SkeletonProps) => {
  const { ref, width } = useResizeObserver<HTMLDivElement>();

  return (
    <Box {...{ className }} ref={ref}>
      {width && (
        <Line
          initial={variants.hidden}
          animate={variants.visible(width - SIZE)}
          transition={variants.transition}
        />
      )}
    </Box>
  );
};

const Line = styled(motion.div)`
  ${tw`h-full bg-white opacity-25`}
  width: ${SIZE}px;
`;

const Box = styled.div`
  ${mixins.fillContainer}
  ${tw`border-black rounded-sm shadow-sm`}
  ${tw`bg-gray-300 bg-opacity-50`}
`;

Skeleton.className = Box;

export default Skeleton;
