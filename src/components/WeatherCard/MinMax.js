/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui'
import { Flex, Text } from '@theme-ui/components'

const MinMax = (props) => {

    return (
        <Flex sx={{ flexDirection: 'column' }}>
            <Flex >
                <Text sx={{ variant: 'text.symbols', top: '5px', position: 'relative' }}>{props.arrow === 'up' ? `↑` : '↓'}</Text>
                <Text sx={{ variant: 'text.numbers', fontSize: '5' }}>{props.temp}</Text>
                <Text sx={{ variant: 'text.symbols', top: '5px', position: 'relative' }}>&#730;</Text>
                <Text sx={{ variant: 'text.symbols', top: '5px', position: 'relative' }}>C</Text>
            </Flex>
            <Text  {...props} mt={-8} sx={{ variant: 'text.symbols', color: props => `${props.color}` }}>
                {props.arrow === 'up' ? 'MAX' : 'MIN'}
            </Text>
        </Flex>
    )
}

export default MinMax;