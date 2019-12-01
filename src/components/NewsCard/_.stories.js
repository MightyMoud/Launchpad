import React from 'react';
import { storiesOf } from '@storybook/react';

import NewsCard from './component';

export default {
    id: '4',
    title: 'NewsCard',
};


storiesOf('NewsCard', module)
    .add('day', () => <NewsCard />)
    .add('loading', () => <NewsCard loading={true} />)
