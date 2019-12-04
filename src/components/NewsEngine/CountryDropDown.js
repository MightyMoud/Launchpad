/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Select, Label, Box } from '@theme-ui/components';

import ThemeProvider from "../ThemeProvider";


const CountryDropDown = ({ change, value }) => {
    return (
        <ThemeProvider>
            <Box as='form' sx={{ color: 'text', width: '20%', position: 'absolute', top: '-30px', right: '11px' }}>
                {/* <Label htmlFor='country'>Country</Label> */}
                <Select onChange={change} value={value} name='country' mb={3} p={1}>
                    <option value='us'>USA</option>
                    <option value='au'>Australia</option>
                    <option value='CA'>Canada</option>
                </Select>
            </Box>
        </ThemeProvider>
    );
}

export default CountryDropDown;