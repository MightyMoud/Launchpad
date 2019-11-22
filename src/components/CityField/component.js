/**@jsx jsx */
import React, { useState } from 'react';
import { jsx } from 'theme-ui';
import { Skeleton } from 'antd';
import { Text, Badge, Alert, Close } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider';
import AutoComplete from './AutoComplete'


const CityField = ({ city, loading, error }) => {

    const [output, setOutput] = useState(true);

    if (loading) {
        return (
            <Skeleton active paragraph={{ rows: 0 }} title={{ width: '150px' }}></Skeleton>
        )
    } else if (!loading && error) {
        return (
            <ThemeProvider>
                <Alert p='2' sx={{ maxWidth: '300px' }} variant='error' >There has been an errror with your request. Please try again.
                    <Close ml='auto' mr={-2} onClick={() => setOutput(!output)}></Close>
                </Alert>
            </ThemeProvider>
        )
    } else if (city && !loading && output && !error) {
        return (
            <ThemeProvider>
                <Text onClick={() => setOutput(!output)} sx={{ variant: 'text.h2', fontSize: '5', position: 'relative', '&:hover': { top: '-2px' } }}>
                    {city}
                </Text>
            </ThemeProvider >
        )
    } else {
        return (
            <ThemeProvider>
                <AutoComplete SearchCity={null} >
                    <Badge variant='circle' mt={-36} onClick={() => setOutput(!output)} sx={{ position: 'relative', '&:hover': { top: '-2px' } }} >X</Badge>
                </AutoComplete>
            </ThemeProvider>
        )
    }
}

export default CityField;