import { PANEL, SB_LABELS } from '@constants';
import { usePanel } from '@hooks';
import { Panel } from '@molecules';
import React, { useEffect } from 'react';

export default {
  title: `${SB_LABELS.ORGANISMS}Panels/Theme Panel`,
};

export const Default = () => {
  const { setValue } = usePanel();
  useEffect(() => {
    setValue(PANEL.theme);
  }, [setValue]);

  return <Panel />;
};
