/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Text, Container } from '@theme-ui/components';


import ThemeProvider from '../ThemeProvider'

const AM_PM = ({ mode }) => {


    return (
        <ThemeProvider>
            <Container variant='layout.dayContainer' sx={{ transform: 'translate(-50%, -150%)', left: '-10%' }}>
                <Text variant='text.day'>
                    {`${mode === 'day' ? 'PM' : 'AM'}`}
                </Text>
            </Container>
        </ThemeProvider>
    );
}

export default AM_PM;