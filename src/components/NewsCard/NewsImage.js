/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Box, Image } from '@theme-ui/components'
import Skeleton from 'react-loading-skeleton';

import ThemeProvider from '../ThemeProvider'

const NewsImage = ({ url }) => {
    return (
        <ThemeProvider>
            <Box sx={{ flex: '0 0 20%' }}>
                {url === undefined ? <Skeleton width={160} height={200} /> :
                    <Image
                        sx={{ objectFit: 'cover' }}
                        src={url} />
                }
            </Box>
        </ThemeProvider>
    );
}

export default NewsImage;