import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CityField from './component';

export default {
    id: '1',
    title: 'CityField',
};


storiesOf('CityField', module)
    .add('Display', () => <CityField city={'Melbourne'}></CityField>)
    .add('Loading', () => <CityField loading={true}></CityField>)
    .add('Input', () => <CityField output={false} loading={false}></CityField>)
    .add('Input Error', () => <CityField loading={false} error={true}></CityField>)