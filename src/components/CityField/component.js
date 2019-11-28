/**@jsx jsx */
import { useState, useEffect } from 'react';
import { jsx } from 'theme-ui';
import { Text, Badge, Alert, Close, Spinner } from '@theme-ui/components'


import ThemeProvider from '../ThemeProvider';
import AutoComplete from './AutoComplete'



const CityField = ({ city, loading, error, SearchCity }) => {

    const [output, setOutput] = useState(true);
    const [errorLocal, setErrorLocal] = useState(false);

    // transfer the error to local error. I need a local error I can set and uset to dismiss the error message
    useEffect(() => {
        setErrorLocal(error)
    }, [loading])

    if (loading) {
        return (
            <Spinner ></Spinner>
        )
    } else if (!loading && errorLocal) {
        return (
            <ThemeProvider>
                <Alert p='1' sx={{ maxWidth: '300px' }} variant='error'>Invalid location. Please try again.
                    <Close ml='auto' mr={-2} onClick={() => setErrorLocal(false)}></Close>
                </Alert>
            </ThemeProvider>
        )
    } else if (city && !loading && output && !errorLocal) {
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
                <AutoComplete searchCity={SearchCity} output={() => setOutput(!output)}>
                    <Badge variant='circle' mt={-36} onClick={() => setOutput(!output)} sx={{ position: 'relative', '&:hover': { top: '-2px' } }} >X</Badge>
                </AutoComplete>
            </ThemeProvider>
        )
    }
}

export default CityField;