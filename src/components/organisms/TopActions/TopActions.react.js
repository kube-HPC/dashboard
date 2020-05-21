import { TOP_BAR } from '@config';
import { useTopActions } from '@hooks';
import { IconsBar, Menu } from '@molecules';
import { mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import { styled, tw } from 'twin.macro';

const TopActions = ({ className }) => {
  const { topRightIcons, topLeftIcons } = useTopActions();

  return (
    <Container className={className}>
      <IconsBar key="left" icons={topLeftIcons} reveal="top" />
      <Menu key="center" horizontal>
        {TOP_BAR.values.map(value => (
          <div key={value}>{value}</div>
        ))}
      </Menu>
      <IconsBar key="right" icons={topRightIcons} reveal="top" />
    </Container>
  );
};

const Container = styled.div`
  ${mixins.flexBetween}
  ${tw`text-lg w-full uppercase`}
`;

TopActions.propTypes = {
  className: PropTypes.string,
};

export default TopActions;
