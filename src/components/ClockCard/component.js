/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Text, Container } from '@theme-ui/components'


import ThemeProvider from '../ThemeProvider'
import ClockFace from './ClockFace'
import ClockHands from './ClockHands';
import Day from './Day';
import AM_PM from './AM_PM';



const ClockCard = ({ remoteDate }) => {

    // set variables for time display
    var seconds = remoteDate.getSeconds();
    var minutes = remoteDate.getMinutes();
    var hours = remoteDate.getHours();
    var day = remoteDate.getDate();
    //set rotation values for hands
    var secAngle = seconds * 6;
    var minAngle = minutes * 6 + seconds * (360 / 3600);
    var hourAngle = hours * 30 + minutes * (360 / 720);

    return (
        <ThemeProvider>
            <ClockFace >
                <ClockHands
                    hourAngle={hourAngle}
                    minAngle={minAngle}
                    secAngle={secAngle}
                />
                <Day
                    day={day}
                />
                <AM_PM
                    mode={hours >= 12 ? 'day' : 'night'}
                />
            </ClockFace>
        </ThemeProvider >
    )
}

export default ClockCard;