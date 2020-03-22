import { Card, Tag } from '@components';
import { COLORS, mixins } from '@styles';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import JobTime from './JobTime.react';

const Entry = styled(Card)`
  ${mixins.flexBetween}
`;

const Container = styled.div`
  ${tw`relative pt-5`}
  ${Tag.SC} {
    ${tw`capitalize`}
  }
`;

const Types = styled.div`
  ${tw`absolute right-0 top-0 mr-5`}
  ${Tag.SC}:not(:first-child) {
    ${tw`ml-2`}
  }
`;

const Item = styled.div``;

const JobEntry = ({ className, job }) => {
  const {
    pipeline: { name, jobId, types, startTime },
    status: { status },
    results,
  } = job;

  return (
    <Container>
      <Types>
        {types.map(type => (
          <Tag key={type} color={COLORS.pipeline.type[type]}>
            {type}
          </Tag>
        ))}
      </Types>
      <Entry className={className}>
        <Item>{jobId}</Item>
        <Item>{name}</Item>
        <Tag color={COLORS.pipeline.status[status]}>{status}</Tag>
        <JobTime startTime={startTime} timeTook={results?.timeTook} />
      </Entry>
    </Container>
  );
};

JobEntry.propTypes = {
  className: PropTypes.string,
  job: PropTypes.object.isRequired,
};

export default JobEntry;
