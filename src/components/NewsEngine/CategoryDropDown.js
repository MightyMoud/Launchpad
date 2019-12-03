/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Select, Label, Box } from '@theme-ui/components';

import ThemeProvider from "../ThemeProvider";


const CategoryDropDown = ({ value, change }) => {
    return (
        <ThemeProvider>
            <Box as='form' sx={{ color: 'text', width: '20%', position: 'absolute', top: '-30px' }}>
                {/* <Label htmlFor='Category'>Category</Label> */}
                <Select onChange={change} value={value} name='country' mb={3} p={1}>
                    <option value='business'>Business</option>
                    <option value='technology'>Technology</option>
                    <option value='sports'>Sports</option>
                </Select>
            </Box>
        </ThemeProvider>
    );
}

export default CategoryDropDown;