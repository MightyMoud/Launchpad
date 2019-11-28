import React from 'react';
import { storiesOf } from '@storybook/react';

import ClockCard from './component';

export default {
    id: '1',
    title: 'ClockCard',
};


storiesOf('ClockCard', module)
    .add('Default', () => <ClockCard />)
