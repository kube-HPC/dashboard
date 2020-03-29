import { SCROLL } from '@config';
import { useJobs } from '@hooks';
import PropTypes from 'prop-types';
import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import JobReveal from './JobReveal.react';

const Container = styled.div``;

const Jobs = ({ className }) => {
  const { list } = useJobs();
  const [reveal, setReveal] = useState(false);

  const heightStyle = useMemo(() => ({ height: list.length * SCROLL.itemSize }), [list.length]);

  useEffect(() => {
    setTimeout(() => {
      setReveal(true);
    }, 500);
  }, []);

  return (
    <Container className={className} style={heightStyle}>
      {reveal && list.map((job, index) => <JobReveal key={index} index={index} job={job} />)}
    </Container>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

Jobs.SC = Container;
Jobs.displayName = `Jobs`;

export default Jobs;
