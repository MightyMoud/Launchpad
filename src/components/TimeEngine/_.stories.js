import React from 'react';
import { storiesOf } from '@storybook/react';

import TimeEngine from './component';

export default {
    id: '4',
    title: 'TimeEngine',
};


storiesOf('TimeEngine', module)
    .add('day', () => <TimeEngine location='Cairo, Egypt' />)
    .add('night', () => <TimeEngine location='Calgary, CA' />)
