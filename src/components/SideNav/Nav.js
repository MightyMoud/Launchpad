/**@jsx jsx */
import React, { useEffect, useState } from 'react';
//import { Link } from '@reach/router'
import { jsx } from 'theme-ui';
import { Flex, Badge, NavLink } from '@theme-ui/components'

import ThemeProvider from "../ThemeProvider";

const Nav = () => {

    const url = document.URL;
    var path = url.substr(url.lastIndexOf('/'), url.length);

    return (
        <ThemeProvider>
            <Flex as='nav' py={2} sx={{ flexDirection: 'column', alignItems: 'center', color: 'text' }} >
                <NavLink href='/home' variant={path === '/' ? 'navActive' : 'nav'}>
                    Home
                </NavLink>
                <NavLink href='/weather' variant={path === '/weather' ? 'navActive' : 'nav'} >
                    Weather
                </NavLink>
                <NavLink href='/time' variant={path === '/time' ? 'navActive' : 'nav'} >
                    Time
                </NavLink>
                <NavLink href='/habits' variant={path === '/habits' ? 'navActive' : 'nav'} >
                    Habits
                </NavLink>
                <NavLink href='/news' variant={path === '/news' ? 'navActive' : 'nav'} >
                    News
                </NavLink>
                <NavLink href='/reports' variant={path === '/reports' ? 'navActive' : 'nav'} >
                    Reports
                </NavLink>
            </Flex>
        </ThemeProvider>
    );
}

export default Nav;