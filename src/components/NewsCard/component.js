/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Text, Box, Container, Image, Badge, Link } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider'
import NewsImage from './NewsImage';
import NewsTextCon from './NewsTextCon';
import NewsTitle from './NewsTitle';
import NewsBody from './NewsBody';

const NewsCard = () => {
    return (
        <ThemeProvider>
            <Container variant='layout.NewsBlockCon'>
                <NewsImage url={null} />
                <NewsTextCon>
                    <NewsTitle title='Hello, World!' />
                    <NewsBody />
                    <Box sx={{ position: 'absolute', top: '75%' }}>
                        <Badge mx={1} px={1} bg='blueHigh'> 13 Jun</Badge>
                        <Badge mx={0} px={1} bg='blueHigh'> 9news</Badge>
                    </Box>
                    <Text variant='text.body' className='more' sx={{ top: '120%', left: '80%', position: 'absolute', transform: 'translate(-50%)', willChange: 'top', transition: 'all 200ms ease-in-out' }}>
                        Read More &#8658;
                    </Text>
                </NewsTextCon>
            </Container>
        </ThemeProvider >
    );
}

export default NewsCard;