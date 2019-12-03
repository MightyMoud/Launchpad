/**@jsx jsx */
import React, { useEffect, useState } from 'react';
//import { Link } from '@reach/router'
import { jsx } from 'theme-ui';
import { Flex } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider';
import User from './User'
import Nav from './Nav'


const SideNav = () => {
    return (
        <ThemeProvider>
            <Flex bg='background' sx={{
                display: 'flex',
                flexDirection: 'column',
                width: ['0px', '180px', '220px'],
                height: '100vh',
                borderRight: t => `2px solid ${t.colors.secondary}`
            }}>
                <User />
                <Nav />
            </Flex>
        </ThemeProvider>
    );
}

export default SideNav;