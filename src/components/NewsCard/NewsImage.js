/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Box, Image } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider'

const NewsImage = ({ url }) => {
    return (
        <ThemeProvider>
            <Box sx={{ flex: '0 0 20%' }}>
                <Image
                    sx={{ objectFit: 'cover', height: '100%' }}
                    src={url === null ? 'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/silverstone-feed-data/1161f234-688e-4daf-8c9d-679e826a9b76.jpg/r0_74_800_526_w1200_h678_fmax.jpg' : url} />
            </Box>
        </ThemeProvider>
    );
}

export default NewsImage;