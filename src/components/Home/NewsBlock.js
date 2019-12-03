/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui';
import { Container, Text } from '@theme-ui/components';
import { lighten, darken } from '@theme-ui/color'

import ThemeProvider from "../ThemeProvider";
import NewsEngine from '../NewsEngine/component'


const NewsBlock = () => {
    return (
        <ThemeProvider>
            <Container p={1} sx={{ bg: lighten('background', .07) }}>
                <Text variant='text.h2' sx={{ textAlign: 'center', color: darken('text', 0.07) }}>Latest news</Text>
                <Container sx={{ display: 'flex', alignItems: 'space-around' }}>
                    <NewsEngine />
                </Container>
            </Container>
        </ThemeProvider>
    );
}

export default NewsBlock;