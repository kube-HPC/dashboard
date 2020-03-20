import { SB_LABELS } from '@constants';
import React from 'react';
import Card from './Card.react';

export default {
  title: `${SB_LABELS.ATOMS}Card`,
};

export const Default = () => (
  <Card>
    Lorem ipsum euismod praesent nullam sapien netus suspendisse gravida placerat aliquet, duis elit
    sagittis lacus in fusce libero nam suspendisse, massa venenatis vehicula potenti tempus in proin
    amet elementum.
  </Card>
);
