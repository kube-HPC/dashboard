import { Divider } from '@atoms';
import prettyMilliseconds from 'pretty-ms';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef, useState } from 'react';
import Moment from 'react-moment';
import { styled, tw } from 'twin.macro';

const SEC = 1000;

const JobTime = ({ timeTook, startTime, className }) => {
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

  const runningTime = prettyMilliseconds(timeTook ? timeTook * 1000 : time - startTime);

  return (
    <Container className={className}>
      <FullDate format="DD/MM/YY">{startTime}</FullDate>
      <Hour format="HH:mm:ss">{startTime}</Hour>
      <Time>{runningTime}</Time>
    </Container>
  );
};

const FullDate = styled(Moment)``;
const Hour = styled(Moment)``;
const Time = styled.div`
  ${tw`inline-block`}
`;

const Container = styled.div`
  ${tw`grid grid-cols-3 text-center gap-1`}
  ${Time} {
    ${tw`font-medium`}
  }
  ${FullDate},${Divider.className},${Hour} {
    ${tw`hidden xl:inline-block font-light`}
  }
`;

JobTime.propTypes = {
  startTime: PropTypes.number,
  timeTook: PropTypes.number,
  results: PropTypes.object,
  className: PropTypes.string,
};

const JobTimeMemo = memo(JobTime);
JobTimeMemo.displayName = `JobTime`;
JobTimeMemo.SC = Container;

export default JobTimeMemo;
