/**@jsx jsx */
import { jsx } from 'theme-ui'
import { Flex, Text } from '@theme-ui/components'
import Reel from 'react-reel';

const MinMax = (props) => {

    const reelStyle = {
        reel: {
            height: "1.07em",
            display: "flex",
            alignItems: "flex-end",
            overflowY: "hidden",
            lineHeight: "0.97em"
        },
        group: {
            transitionDelay: "0",
            transitionTimingFunction: "ease-in-out",
            transform: "translate(0, 0)",
            height: "1.5em"
        },
        number: {
            height: "1em"
        }
    };

    return (
        <Flex sx={{ flexDirection: 'column' }}>
            <Flex >
                <Text sx={{ variant: 'text.numbers', fontSize: '5' }}>
                    <Reel theme={reelStyle} text={`${props.arrow === 'up' ? `↑` : '↓'} ${props.temp}˚C`} />
                </Text>
            </Flex>
            <Text  {...props} mt={-8} sx={{ variant: 'text.symbols', color: props => `${props.color}` }}>
                {props.arrow === 'up' ? 'MAX' : 'MIN'}
            </Text>
        </Flex>
    )
}

export default MinMax;