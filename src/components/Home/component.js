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
                gridTemplateColumns: '1fr 2.5fr',
                gridTemplateRows: '1fr 1fr 1fr',
                gridGap: '20px'
            }}>
                <WeatherBlock className='box1' />
                <NewsBlock className='box3' />
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
