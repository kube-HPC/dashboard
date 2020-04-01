import { Divider, Link } from '@atoms';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const SelfCenter = styled.div`
  ${tw`self-center`}
`;

const Welcome = () => (
  <>
    <SelfCenter>
      <div>HKube - HPC over Kuberenetes</div>
      <Divider />
      <p>
        HKube is a cloud-native open source framework to run distributed pipeline of algorithms
        built on Kubernetes. HKube optimally utilizing pipeline's resources, based on user
        priorities and heuristics.
      </p>
    </SelfCenter>
    <div>
      <Link href={`http://hkube.io/`}>Docs</Link>
      <Divider horizontal />
      <Link href={`https://github.com/kube-HPC/hkube`}>Github</Link>
    </div>
  </>
);

Welcome.propTypes = {};

export default Welcome;
