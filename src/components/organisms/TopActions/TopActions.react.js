import { TOP_BAR } from '@config';
import { useTopActions } from '@hooks';
import { IconsBar, Menu } from '@molecules';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${mixins.flexBetween}
  ${mixins.upperCase}
  ${tw`text-lg w-full`}
`;

const TopActions = ({ className }) => {
  const { topRightIcons } = useTopActions();

  return (
    <Container className={className}>
      <IconsBar key="left" icons={TOP_BAR.leftIcons} reveal="top" />
      <Menu key="center" horizontal>
        {TOP_BAR.values.map(value => (
          <div key={value}>{value}</div>
        ))}
      </Menu>
      <IconsBar key="right" icons={topRightIcons} reveal="top" />
    </Container>
  );
};

TopActions.propTypes = {
  className: PropTypes.string,
};

export default TopActions;
