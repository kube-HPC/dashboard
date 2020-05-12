import { Tag } from '@atoms';
import { THEME } from '@constants';
import { useUserTheme } from '@hooks';
import { mixins, variants } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp, theme } from 'styled-tools';
import tw from 'twin.macro';
import Label from './Label.react';

const JobNodeInfo = ({
  className,
  algorithmName,
  retries,
  status,
  warnings,
  isVisible,
  innerRef,
}) => {
  const { theme } = useUserTheme();

  return (
    <Container
      className={className}
      ref={innerRef}
      initial="hidden"
      animate={status ? `visible` : `hidden`}
      isVisible={isVisible && status}
      variants={variants.revealOpacity}>
      {algorithmName && (
        <Label title="Algorithm Name">
          <span>{algorithmName}</span>
        </Label>
      )}
      {status && (
        <Label title="Status">
          <Tag color={theme.colors.task.status[status]}>{status}</Tag>
        </Label>
      )}
      {warnings && <Label title="Warnings">{warnings.length}</Label>}
      {retries && <Label title="Retries">{retries}</Label>}
    </Container>
  );
};

const Container = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-col p-2 rounded-lg shadow-lg text-left border border-gray-400`}
  ${ifProp(`isVisible`, tw`block`, tw`hidden`)};
  ${theme(THEME.value.background)};
`;

JobNodeInfo.propTypes = {
  algorithmName: PropTypes.string,
  className: PropTypes.string,
  innerRef: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  retries: PropTypes.number,
  status: PropTypes.string,
  warnings: PropTypes.number,
};

JobNodeInfo.className = Container;

const MemoJobNodeInfo = React.memo(JobNodeInfo);
MemoJobNodeInfo.displayName = `Node Info`;

export default MemoJobNodeInfo;
