import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import WeatherCard from './component';

export default {
    id: '2',
    title: 'WeatherCard',
};


storiesOf('WeatherCard', module)
    .add('Default', () => <WeatherCard
        temp={6}
        minTemp={3.86}
        maxTemp={12.65}
        city={'Melbourne'}
        country={'Au'}
        main='Clouds'
    />)
    .add('Error', () => <WeatherCard
        temp={6}
        minTemp={3.86}
        maxTemp={12.65}
        city={'Melbourne'}
        country={'Au'}
        main='Clouds'
        error={true}
        loading={false}
        output={true}
    />)
    .add('Loading', () => <WeatherCard temp={6} city={'Melbourne'} country={'Au'} main='Clouds' error={true} loading={true}></WeatherCard>)