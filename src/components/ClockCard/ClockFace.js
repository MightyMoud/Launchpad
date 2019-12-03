/**@jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'

import ThemeProvider from '../ThemeProvider'
import styled from '@emotion/styled';


const ClockFace = (props) => {

    // draw the indicators around the clock face
    var indicators = [];
    for (let i = 1; i < 13; i++) {
        indicators.push(<span className="clock-indicator" sx={{
            transform: `rotate(${i * 30}deg) translateY(-78px)`,
            backgroundColor: `${i % 12 === 0 ? '#c00' : i % 3 === 0 ? '#aaa' : '#ddd'}`,
            position: 'absolute',
            width: '2px',
            height: '8px',
            margin: '78px 80px',
        }}></span >)
    }

    const size = 180;

    const OuterRing = styled.div`
        position: relative;
        width: ${size}px;
        height: ${size}px;
        margin: auto;
        padding: 5px;
        background-image: linear-gradient(#f7f7f7, #e0e0e0);
        border-radius: 50%;
        box-shadow: 0 10px 15px rgba(0, 0, 0, .15), 0 2px 2px rgba(0, 0, 0, .2);
    `
    const ClockBase = styled.div`
        width: ${size}px;
        height: ${size}px;
        background-color: #eee;
        border-radius: 50%;
        box-shadow: 0 0 5px #eee;
    `
    const Indicators = styled.div`
        position: absolute;
        z-index: 1;
        top: 15px;
        left: 15px;
        width: ${size - 50}px;
        height: ${size - 50}px;
    `

    const ClockCenter = styled.span`
        position: absolute;
        z-index: 1;
        width: ${size - 100}px;
        height: ${size - 100}px;
        top: 55px;
        left: 55px;
        background-image: linear-gradient(#e3e3e3, #f7f7f7);
        border-radius: 50%;
        box-shadow: inset 0 -1px 0 #fafafa, inset 0 1px 0 #e3e3e3;
        &:after{
            content: "";
            display: block;
            width: 20px;
            height: 20px;
            margin: 65px;
            background-color: #ddd;
            border-radius: 50%;
        }
    `

    return (
        <ThemeProvider>
            <OuterRing sx={{}}>
                <ClockBase>
                    <Indicators>
                        {indicators}
                    </Indicators>
                    <ClockCenter />
                    {props.children}
                </ClockBase>
            </OuterRing>
        </ThemeProvider>
    );
}

export default ClockFace;