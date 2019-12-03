/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Text } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider'

const NewsBody = ({ content }) => {
    return (
        <ThemeProvider>
            <Text variant='text.body' sx={{
                flex: '0 0 50%',
                margin: 0,
                textAlign: 'justify',
                overflow: 'hidden',
                texOverflow: 'ellipsis',
                position: 'relative',
                '&:before': {
                    content: `' '`,
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    left: '0',
                    top: '0',
                    background: 'linear-gradient(transparent 3px, #353b59)'
                }
            }}>
                {content}
            </Text>
        </ThemeProvider>
    );
}

export default NewsBody;