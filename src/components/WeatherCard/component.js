/**@jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui';
import { Flex, Text, Box, Image } from '@theme-ui/components';

import ThemeProvider from '../ThemeProvider';
import CityField from '../CityField/component';
import MinMax from './MinMax'
import Condition from './Condition';

const WeatherCard = ({ city, country, temp, maxTemp, minTemp, main, id, error, loading, output }) => {
    var highColor = 0;
    var lowColor = 0;
    var color = null;
    if (temp > 12 && temp < 40) {
        highColor = (1 + (1 - (temp - 17) / 28) * 254);
        lowColor = highColor - 150;
        color = `linear-gradient(0deg, rgb(255,${highColor},0),rgb(255,${lowColor},0))`;

    } else if (temp < 12) {
        highColor = (1 + (1 - (temp - (-20)) / 38) * 254);
        lowColor = highColor + 100;
        color = `linear-gradient(0deg, rgb(0,${lowColor},255),rgb(0,${highColor},255))`;
    }

    var icon = null;
    switch (main) {
        case 'Clouds':
            icon = `./img/Mostly Cloudy-2x.png`;
            break;
        case 'Clear':
            icon = `./img/Mostly Sunny-2x.png`;
            break;
        case 'Haze':
            icon = `./img/Haze-2x.png`;
            break;
        case 'Hail':
            icon = `./img/Hail-2x.png`;
            break;
        case 'Fog':
            icon = `./img/Fog-2x.png`;
            break;
        case 'Tornado':
            icon = `./img/Tornado-2x.png`;
            break;
        case 'Dust':
            icon = `./img/Dust-2x.png`;
            break;
        case 'Mist':
            icon = `./img/Fog-2x.png`;
            break;
        case 'Snow':
            icon = `./img/Snow-2x.png`;
            break;
        case 'Rain':
            icon = `./img/Rain-2x.png`;
            break;
        case 'Drizzle':
            icon = `./img/Drizzle-2x.png`;
            break;
        case 'Thunderstorm':
            icon = `./img/Severe Thunderstorm-2x.png`;
            break;
        default:
            icon = `./img/Fog-2x.png`;
            break;
    }

    return (
        <ThemeProvider>
            <Flex p={3} m={2} sx={{ variant: 'layout.card', background: color }}>
                <Box sx={{ textAlign: 'center' }}>
                    <CityField output={output} city={city} loading={loading} erorr={error}></CityField>
                    <Text sx={{ variant: 'text.h3', color: 'text', textTransform: 'uppercase', fontSize: '4' }}>
                        {country}
                    </Text>
                </Box>
                <Image src={icon} sx={{ maxWidth: '50%' }} />
                <Condition temp={temp} main={main} />
                <Flex sx={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                    <MinMax arrow='up' temp={maxTemp} color='red' />
                    <MinMax arrow='down' temp={maxTemp} color='blue' />
                </Flex>
            </Flex>
        </ThemeProvider >
    )
}

export default WeatherCard;