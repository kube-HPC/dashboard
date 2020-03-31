import { useGraph } from '@hooks';
import { JobGraph } from '@molecules';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw``}
`;

const JobPanel = ({ className }) => {
  const { selected } = useGraph();

  return (
    <Container className={className}>
      {selected ? <JobGraph jobGraph={selected} /> : `No Graph Selected`}
    </Container>
  );
};

JobPanel.propTypes = {
  className: PropTypes.string,
};

export default JobPanel;
