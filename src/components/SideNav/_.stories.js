import React from 'react';
import { storiesOf } from '@storybook/react';

import SideNav from './component';

export default {
    id: '4',
    title: 'SideNav',
};


storiesOf('SideNav', module)
    .add('default', () => <SideNav />)
