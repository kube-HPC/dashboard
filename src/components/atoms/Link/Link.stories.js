import {SB_LABELS} from '@constants';
import React from 'react';
import Link from './Link.react';

export default {
  title: `${SB_LABELS.ATOMS}${Link.name}`,
  component: Link,
};

export const Default = () => <Link href={`https://github.com/kube-HPC/hkube`}>This is a link</Link>;
