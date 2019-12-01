/**@jsx jsx */
import React, { useEffect, useState } from 'react';
//import { Link } from '@reach/router'
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider'
import User from './User'
import Nav from './Nav'


const SideNav = () => {
    return (
        <ThemeProvider>
            <Flex bg='background' sx={{ display: 'flex', flexDirection: 'column', width: '260px', height: '100vh' }}>
                <User />
                <Nav />
            </Flex>
        </ThemeProvider>
    );
}

export default SideNav;