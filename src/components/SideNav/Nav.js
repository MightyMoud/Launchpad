/**@jsx jsx */
import React, { useEffect, useState } from 'react';
//import { Link } from '@reach/router'
import { jsx } from 'theme-ui';
import { Flex, Badge, NavLink } from '@theme-ui/components'

import ThemeProvider from "../ThemeProvider";

const Nav = () => {
    return (
        <ThemeProvider>
            <Flex as='nav' py={2} sx={{ flexDirection: 'column', alignItems: 'center', color: 'text' }} >
                <NavLink href='/home' sx={{ borderLeft: theme => `6px solid ${theme.colors.secondary}` }} >
                    Home
                </NavLink>
                <NavLink href='/weather' >
                    Weather
                </NavLink>
                <NavLink href='/time' >
                    Time
                </NavLink>
                <NavLink href='/habits' >
                    Habits
                </NavLink>
                <NavLink href='/news' >
                    News
                </NavLink>
                <NavLink href='/reports' >
                    Reports
                </NavLink>
            </Flex>
        </ThemeProvider>
    );
}

export default Nav;