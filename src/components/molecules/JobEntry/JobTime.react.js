import HumanizeDuration from 'humanize-duration';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import Moment from 'react-moment';

const SEC = 1000;

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
    <div>
      <Moment format="DD/MM/YY HH:mm:ss">{startTime}</Moment>
      {` `}
      {HumanizeDuration(timeTook ? timeTook * 1000 : time - startTime, {
        maxDecimalPoints: 2,
      }).slice(0, length)}
    </div>
  );
};

JobTime.propTypes = {
  startTime: PropTypes.number,
  length: PropTypes.number,
  timeTook: PropTypes.number,
  results: PropTypes.object,
};

export default JobTime;
