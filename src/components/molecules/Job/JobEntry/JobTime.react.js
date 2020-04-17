import { Divider } from '@atoms';
import HumanizeDuration from 'humanize-duration';
import PropTypes from 'prop-types';
import React, { memo, useEffect, useRef, useState } from 'react';
import Moment from 'react-moment';
import styled from 'styled-components';
import tw from 'twin.macro';

const SEC = 1000;

const FullDate = styled(Moment)``;
const Hour = styled(Moment)``;
const Time = styled.div`
  ${tw`inline-block`}
`;

const responsiveHide = tw`hidden xl:inline-block`;

const Container = styled.div`
  ${tw`truncate`}
  ${FullDate},${Divider.SC},${Hour} {
    ${responsiveHide}
  }
`;

const JobTime = ({ timeTook, startTime }) => {
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
      <FullDate format="DD/MM/YY">{startTime}</FullDate>
      <Divider vertical />
      <Hour format="HH:mm:ss">{startTime}</Hour>
      <Divider vertical />
      <Time>
        {HumanizeDuration(timeTook ? timeTook * 1000 : time - startTime, {
          maxDecimalPoints: 2,
        })}
      </Time>
    </Container>
  );
};

JobTime.propTypes = {
  startTime: PropTypes.number,
  timeTook: PropTypes.number,
  results: PropTypes.object,
};

const JobTimeMemo = memo(JobTime);
JobTimeMemo.displayName = `JobTime`;

export default JobTimeMemo;
