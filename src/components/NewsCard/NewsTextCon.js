/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Box } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider'

const NewsTextCon = (props) => {
    return (
        <Box px={2} py={1} sx={{ flex: '0 1 80%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', position: 'relative' }}>
            {props.children}
        </Box>
    )
}

export default NewsTextCon;
