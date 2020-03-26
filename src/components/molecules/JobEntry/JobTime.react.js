import { Divider } from '@components';
import HumanizeDuration from 'humanize-duration';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef, useState } from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import tw from 'twin.macro';

const SEC = 1000;
const Container = styled.div`
  span {
    ${tw`truncate`}
  }
`;

const JobTime = ({ timeTook, startTime, length = 15 }) => {
  const [time, setTime] = useState(Date.now());
  const intervalId = useRef();

  useEffect(() => {
    const id = setInterval(() => {
      setTime(Date.now());
    }, 2 * SEC);
    intervalId.current = id;
    return () => clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    if (timeTook) {
      clearInterval(intervalId.current);
    }
  }, [timeTook]);

  return (
    <Container>
      <Moment format="DD/MM/YY">{startTime}</Moment>
      <Divider vertical />
      <Moment format="HH:mm:ss">{startTime}</Moment>
      <Divider vertical />
      <span>
        {HumanizeDuration(timeTook ? timeTook * 1000 : time - startTime, {
          maxDecimalPoints: 2,
        }).slice(0, length)}
      </span>
    </Container>
  );
};

JobTime.propTypes = {
  startTime: PropTypes.number,
  length: PropTypes.number,
  timeTook: PropTypes.number,
  results: PropTypes.object,
};

const JobTimeMemo = memo(JobTime);
JobTimeMemo.displayName = `JobTime`;

export default JobTimeMemo;
