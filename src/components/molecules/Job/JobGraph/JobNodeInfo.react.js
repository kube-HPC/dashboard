import { Tag } from '@atoms';
import { COLORS, mixins, variants } from '@styles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import tw from 'twin.macro';

const Container = styled(motion.div)`
  ${mixins.flexStart}
  ${tw`flex-col p-2 rounded-lg shadow-lg bg-white text-left border border-gray-400`}
  ${ifProp(`isVisible`, tw`block`, tw`hidden`)};
`;

const Item = ({ children }) => (
  <div>
    <span>{children}</span>
  </div>
);

Item.propTypes = {
  children: PropTypes.node.isRequired,
};

const JobNodeInfo = ({
  className,
  algorithmName,
  retries,
  status,
  warnings,
  isVisible,
  innerRef,
}) => (
  <Container
    className={className}
    ref={innerRef}
    initial="hidden"
    animate={status ? `visible` : `hidden`}
    isVisible={isVisible && status}
    variants={variants.revealOpacity}>
    {algorithmName && <Item>Algorithm Name: {algorithmName}</Item>}
    {status && (
      <div>
        <span>Status: </span>
        <Tag color={COLORS.task.status[status]}>{status}</Tag>
      </div>
    )}
    {warnings && <Item>Warnings: {warnings.length}</Item>}
    {retries && <Item>Retries: {retries}</Item>}
  </Container>
);

JobNodeInfo.propTypes = {
  algorithmName: PropTypes.string,
  className: PropTypes.string,
  innerRef: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  retries: PropTypes.number,
  status: PropTypes.string,
  warnings: PropTypes.number,
};

JobNodeInfo.SC = Container;

const MemoJobNodeInfo = React.memo(JobNodeInfo);
MemoJobNodeInfo.displayName = `Node Info`;

export default MemoJobNodeInfo;
