import { Divider, Link } from '@atoms';
import { META } from '@config';
import { mixins } from '@styles';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SelfCenter = styled.div`
  ${tw`self-center`}
`;

const Header = styled.div`
  ${tw`text-lg md:text-xl`}
`;

const Container = styled.div`
  ${mixins.flexCenter}
  ${tw`text-sm lg:text-base`}
  ${tw`flex-col h-full break-normal md:break-words`}
`;

const Links = styled.div`
  ${mixins.flexCenter}
  ${tw`w-full mt-2`}
  > * {
    ${tw`mx-2`}
  }
`;

const Version = styled.span`
  ${tw`text-secondary`}
`;

const Welcome = () => (
  <Container>
    <Header>
      Dashboard <Version>v2.0.0</Version>
    </Header>
    <SelfCenter>
      <div>{META.titleAlt}</div>
      <Divider />
      <p>{META.description}</p>
      <Links>
        <Link href={META.url}>Docs</Link>
        <Link href={META.github}>Github</Link>
        <Link href={META.issues}>Report a bug</Link>
      </Links>
    </SelfCenter>
  </Container>
);

Welcome.propTypes = {};

export default Welcome;
