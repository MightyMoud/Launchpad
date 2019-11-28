/**@jsx jsx */
import React, { useEffect } from 'react';

import { jsx } from 'theme-ui';
import './styles.css';

const ClockCard = () => {

    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getUTCDate();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];



    var d = new Date();
    var s = d.getSeconds() * 6;
    var m = d.getMinutes() * 6 + (s / 60);
    var h = d.getHours() % 12 / 12 * 360 + (m / 12);




    return (
        <div className="box">
            <div className="clock">
                <span className="hours" sx={{ transform: `rotate(${+h}deg)` }}></span>
                <span className="minutes" sx={{ transform: `rotate(${+m}deg)` }}></span>
            </div>
            <div className="date">
                <div id="daymonth">
                    {months[month] + " " + day}
                </div>
                <div id="year">
                    {year}
                </div>
            </div>
        </div>
    )
}

export default ClockCard;