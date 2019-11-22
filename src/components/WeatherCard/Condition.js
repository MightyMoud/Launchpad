/**@jsx jsx */
import React from 'react';
import { jsx } from 'theme-ui'
import { Flex, Text } from '@theme-ui/components'

const Condition = (props) => {

    return (
        <>
            <Flex sx={{ width: '90px', flexDirection: 'row', justifyContent: 'space-around' }} >
                <Text sx={{ variant: 'text.numbers', fontSize: '7' }}>{props.temp}</Text>
                <Text sx={{ variant: 'text.h3', fontSize: '7' }}>&#730;</Text>
                <Text sx={{ variant: 'text.h3', fontSize: '7' }}>C</Text>
            </Flex>
            <Text sx={{ variant: 'text.h3', textTransform: 'uppercase', fontSize: '4' }} >
                {props.main}
            </Text>
        </>
    )
}

export default Condition;

