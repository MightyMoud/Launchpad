import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsEngine from './component';

export default {
    id: '5',
    title: 'NewsEngine',
};


storiesOf('NewsEngine', module)
    .add('test', () => <NewsEngine />)

