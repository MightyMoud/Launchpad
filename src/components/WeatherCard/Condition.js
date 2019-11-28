/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui'
import { Text } from '@theme-ui/components'
import Reel from 'react-reel';


const Condition = (props) => {

    const reelStyle = {
        reel: {
            height: "1.07em",
            display: "flex",
            alignItems: "flex-end",
            overflowY: "hidden",
            lineHeight: "0.97em"
        },
        group: {
            transitionDelay: "0ms",
            transitionTimingFunction: "ease-in-out",
            transform: "translate(0, 0)",
            height: "1.5em"
        },
        number: {
            height: "1em"
        }
    };

    return (
        <>
            <Text sx={{ variant: 'text.numbers', fontSize: '7' }}>
                <Reel theme={reelStyle} text={`${props.temp}˚C`} />
            </Text>
            <Text sx={{ variant: 'text.h3', textTransform: 'uppercase', fontSize: '4' }} >
                {props.main}
            </Text>
        </>
    )
}

export default Condition;

