/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Grid, Container, Flex, Text } from '@theme-ui/components';
import { lighten, darken } from '@theme-ui/color'

import ThemeProvider from '../ThemeProvider';
import NewsEngine from '../NewsEngine/component'
import '../../App.css';
import TimeEngine from '../TimeEngine/component';
import WeatherBlock from './WeatherBlock';
import NewsBlock from './NewsBlock';


const Home = () => {
    return (
        <ThemeProvider>
            <Grid sx={{
                width: '100%',
                height: 'calc(100vh - 22px)',
                gridTemplateColumns: '1fr 3fr',
                gridTemplateRows: '1fr 1fr 1fr',
                gridGap: '20px'
            }}>
                <WeatherBlock className='box1' />
                <NewsBlock className='box3' />
                <Container className='box2' p={1} sx={{ display:'flex',flexDirection:'column', justifyContent:'space-evenly', bg: lighten('background', .07) }}>
                    <Text variant='text.h2' sx={{ textAlign: 'center', color: darken('text', 0.07), selfJustify:'flex-start' }}>Global Time</Text>
                        <TimeEngine location='sydney, au' />
                        <TimeEngine location='New York, USA' />
                </Container>
                <Flex className='box'>

                </Flex>


            </Grid>
        </ThemeProvider>
    );
}

export default Home;
