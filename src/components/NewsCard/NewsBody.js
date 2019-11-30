/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Text } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider'

const NewsBody = () => {
    return (
        <ThemeProvider>
            <Text variant='text.body' sx={{
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
                    background: 'linear-gradient(transparent 3px, #29457C)'
                }
            }}>
                Drinking up to four coffees a day can reduce the risk of type 2 diabetes and high blood pressure, according to a study.\r\nHowever, the benefit is lost if more than four cups of coffee are consumed.\r\nResearchers from the universities of Navarre in Spain and Cat…
            </Text>
        </ThemeProvider>
    );
}

export default NewsBody;