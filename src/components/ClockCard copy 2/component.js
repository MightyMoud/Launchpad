/**@jsx jsx */
import React, { useEffect } from 'react';

import { jsx } from 'theme-ui';
import './styles.css';

const ClockCard = () => {


    var dialLines = ['<span className="diallines"></span>']


    var dials = [];
    for (let i = 1; i < 60; i++) {
        dials.push(<span className="diallines" sx={{ transform: `rotate(${i * 6}deg)` }}></span>)
    }


    var date = new Date();
    var seconds = date.getSeconds();
    var minutes = date.getMinutes();
    var hours = date.getHours();
    var day = date.getDate();

    var secAngle = seconds * 6;
    var minAngle = minutes * 6 + seconds * (360 / 3600);
    var hourAngle = hours * 30 + minutes * (360 / 720);




    return (
        <body>
            <div className="dial">
                <div className="dot"></div>
                <div className="sec-hand" sx={{ transform: `rotate(${secAngle}deg)` }}></div>
                <div className="sec-hand shadow" sx={{ transform: `rotate(${secAngle}deg)` }}></div>
                <div className="min-hand" sx={{ transform: `rotate(${minAngle}deg)` }}></div>
                <div className="min-hand shadow" sx={{ transform: `rotate(${minAngle}deg)` }}></div>
                <div className="hour-hand" sx={{ transform: `rotate(${hourAngle}deg)` }}></div>
                <div className="hour-hand shadow" sx={{ transform: `rotate(${hourAngle}deg)` }}></div>
                <span className="twelve">12</span>
                <span className="three">3</span>
                <span className="six">6</span>
                <span className="nine">9</span>
                <span className="diallines"></span>
                {dials}
                <div className="date">{day}</div>
            </div>

        </body>
    )
}

export default ClockCard;