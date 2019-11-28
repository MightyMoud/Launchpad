import React from 'react';
import { storiesOf } from '@storybook/react';

import WeatherEngine from './component';

export default {
    id: '1',
    title: 'WeatherEngine',
};


storiesOf('WeatherEngine', module)
    .add('Default', () => <WeatherEngine
        location='Melbourne'
    />)
    .add('Error', () => <WeatherEngine
        location=''
    />)