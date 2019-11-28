import React from 'react';
import { storiesOf } from '@storybook/react';

import ClockCard from './component';

export default {
    id: '1',
    title: 'ClockCard',
};


storiesOf('WeatherEngine', module)
    .add('Default', () => <ClockCard
        location='Melbourne'
    />)
    .add('Error', () => <ClockCard
        location=''
    />)