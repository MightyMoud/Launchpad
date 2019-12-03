/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Grid, Container, Flex, Text } from '@theme-ui/components';
import { lighten, darken } from '@theme-ui/color'

import ThemeProvider from '../ThemeProvider';
import WeatherEngine from '../WeatherEngine/component'
import NewsEngine from '../NewsEngine/component'
import '../../App.css';
import TimeEngine from '../TimeEngine/component';


const Home = () => {
    return (
        <ThemeProvider>
            <Grid sx={{
                width: '100%',
                height: 'calc(100vh - 22px)',
                gridTemplateColumns: '1fr 2.5fr',
                gridTemplateRows: '1fr 1fr 1fr',
                gridGap: '20px'
            }}>
                <Container p={1} className='box1' sx={{ bg: lighten('background', .07) }}>
                    <Text variant='text.h2' sx={{ textAlign: 'center', color: darken('text', 0.07) }}>Weather</Text>
                    <Container sx={{ display: 'flex', alignItems: 'space-around' }}>
                        <WeatherEngine location='Sydney, au' />
                        <WeatherEngine location='london, gb' />
                        <WeatherEngine location='perth, au' />
                        <WeatherEngine location='toronto, CA' />
                    </Container>
                </Container>
                <Flex className='box3'>
                    <NewsEngine location='Sydney, au' sx={{ transform: 'scale(0.7)' }} />
                </Flex>
                <Flex className='box2'>
                    {/* <TimeEngine location='Calgary, Ca'></TimeEngine> */}
                </Flex>
                <Flex className='box'>

                </Flex>


            </Grid>
        </ThemeProvider>
    );
}

export default Home;
