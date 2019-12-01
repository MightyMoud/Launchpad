/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Text } from '@theme-ui/components'


import ThemeProvider from '../ThemeProvider'

const NewsTitle = ({ title }) => {
    return (
        <ThemeProvider>
            <Text variant='text.heading' sx={{ fontSize: '18px' }}>
                {title}
            </Text>
        </ThemeProvider>
    );
}

export default NewsTitle;
