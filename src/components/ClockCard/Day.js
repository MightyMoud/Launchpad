/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Text, Container } from '@theme-ui/components';
import Reel from 'react-reel';

import ThemeProvider from '../ThemeProvider'

const Day = ({ day }) => {

    const reelStyle = {
        reel: {
            height: "1.07em",
            display: "flex",
            alignItems: "flex-end",
            overflowY: "hidden",
            lineHeight: "0.97em",
            justifyContent: 'center'
        },
        group: {
            transitionDelay: "0",
            transitionTimingFunction: "ease-in-out",
            transform: "translate(0, 0)",
            height: "1.5em"
        },
        number: {
            height: "1em"
        }
    };

    return (
        <ThemeProvider>
            <Container variant='layout.dayContainer'>
                <Text variant='text.day' >
                    <Reel theme={reelStyle} text={`${day}`} />
                </Text>
            </Container>
        </ThemeProvider>
    );
}

export default Day;