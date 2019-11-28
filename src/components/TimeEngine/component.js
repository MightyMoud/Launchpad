/**@jsx jsx */
import React, { useEffect, useReducer, useState } from 'react';
import { jsx } from 'theme-ui';
import { Container, Box } from '@theme-ui/components'

import ThemeProvider from '../ThemeProvider'
import ClockCard from '../ClockCard/component'
import CityField from '../CityField/component'
import '../CityField/styles.css'



// this is the initial state of all the variables we need/expect to get from the API plus a couple others to handle errors
const initialState = {
    loading: false,
    offset: 0,
    error: false,
    output: true,
    city: null,
    country: null
};
// reducer to swich state variables
const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_PROGRESS':
            return {
                ...state,
                loading: true
            }
        case 'SEARCH_SUCCESS':
            return {
                ...state,
                loading: false,
                error: false,
                output: true,
                offset: action.offset,
                city: action.city,
                country: action.country
            }
        case 'SEARCH_FAIL':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
// a function that creates new date object for the new location using the offset from the API
function calcTime(offset) {
    // create Date object for current location
    var d = new Date();
    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (1000 * offset));
    // set Remotedate to the resulting object
    return nd;
}

const TimeEngine = ({ location }) => {

    // basic declarations of state and the reducer hook
    const [state, dispatch] = useReducer(reducer, initialState);
    const { loading, offset, error, output } = state;

    const getOffset = (city) => {
        // once loaded, the search will start with the original location passed into the Engine
        dispatch({
            type: 'SEARCH_PROGRESS'
        })
        // fetch the results from API 
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=644ba889d2629824a466b19685f307e0`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.cod === 200) {
                    dispatch({
                        type: 'SEARCH_SUCCESS',
                        offset: jsonResponse.timezone,
                        city: jsonResponse.name,
                        country: jsonResponse.sys.country,
                    })
                } else if (jsonResponse.cod !== 200) {
                    dispatch({
                        type: 'SEARCH_FAIL'
                    })
                }
            })
    }
    // Search for the initail location being passed into the component on first render
    useEffect(() => {
        getOffset(location);
    }, [location])

    return (
        <ThemeProvider>
            <Container p={3} bg='lightblue' sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', height: '400px' }}>
                <ClockCard remoteDate={calcTime(state.offset)} />
                <Box sx={{ textAlign: 'center' }}>
                    <CityField
                        error={error}
                        loading={loading}
                        output={output}
                        city={state.city + ', ' + state.country}
                        SearchCity={getOffset} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default TimeEngine;