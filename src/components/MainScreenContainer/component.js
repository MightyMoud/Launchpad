/**@jsx jsx */
import React, { useEffect, useState } from 'react';
//import { Link } from '@reach/router'
import { jsx } from 'theme-ui';
import { Flex, Container } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider';


const MainScreenContainer = (props) => {
    return (
        <ThemeProvider>
            <Container p={2} bg='background' sx={{ height: '100vh' }}>
                {props.children}
            </Container>
        </ThemeProvider>
    );
}

export default MainScreenContainer;