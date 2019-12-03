/**@jsx jsx */
import React, { useEffect, useState } from 'react';
//import { Link } from '@reach/router'
import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components';

import ThemeProvider from '../ThemeProvider';

const Weather = () => {
    return (
        <ThemeProvider>
            <Box bg='background3'>
                Hamda

            </Box>
        </ThemeProvider>
    );
}

export default Weather;