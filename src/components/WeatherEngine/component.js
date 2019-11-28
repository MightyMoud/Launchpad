/**@jsx jsx */
import { useReducer, useEffect } from 'react';
import { jsx } from 'theme-ui';

import WeatherCard from '../WeatherCard/component'


// this is the initial state of all the variables we need/expect to get from the API plus a couple others to handle errors
const initialState = {
    temp: 0,
    loading: null,
    errorMessage: false,
    city: null,
    main: {
        averageTemp: null,
        minTemp: null,
        maxTemp: null
    },
    weather: {
        id: null,
        main: null,
        description: null
    },
    cod: 0
};

// The reducer is the function that will shift the state based on the dispatch value. 
// here it's unloading the values of dispatch onto the state variables

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
                temp: action.payload,
                loading: false,
                errorMessage: action.error,
                city: action.city,
                main: {
                    averageTemp: action.averageTemp,
                    minTemp: action.minTemp,
                    maxTemp: action.maxTemp,
                },
                weather: {
                    id: action.id,
                    main: action.main,
                    description: action.description
                },
                country: action.country,
                cod: action.cod
            }
        case 'SEARCH_FAIL':
            return {
                ...state,
                errorMessage: true,
                loading: action.loading,
                cod: action.cod
            }
        default:
            return state;
    }
}

// base component
const WeatherEngine = ({ location }) => {
    // basic declarations of state and the reducer hook
    const [state, dispatch] = useReducer(reducer, initialState);
    const { loading, errorMessage, city, country, main, weather } = state;

    // definition of the function that gets the API results and assignes it to dispatch
    // this happens once the search button is pressed

    const getWeather = (city) => {
        // once search is pressed, send search progress to display loading signal
        dispatch({
            type: 'SEARCH_PROGRESS'
        })
        // fetch the results from API the unload by dispatch
        // cod is the code returned form API, 200 is success otherwise it's faliure
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=644ba889d2629824a466b19685f307e0`)
            .then(response => response.json())
            .then(jsonResponse => {
                if (jsonResponse.cod === 200) {
                    dispatch({
                        type: 'SEARCH_SUCCESS',
                        payload: jsonResponse.main.temp,
                        cod: jsonResponse.cod,
                        city: jsonResponse.name,
                        averageTemp: jsonResponse.main.temp,
                        minTemp: jsonResponse.main.temp_min,
                        maxTemp: jsonResponse.main.temp_max,
                        country: jsonResponse.sys.country,
                        id: jsonResponse.weather[0].id,
                        icon: jsonResponse.weather[0].icon,
                        main: jsonResponse.weather[0].main,
                        description: jsonResponse.weather[0].description
                    })
                } else if (jsonResponse.cod !== 200) {
                    dispatch({
                        type: 'SEARCH_FAIL',
                        loading: false,
                        error: jsonResponse.message,
                        cod: jsonResponse.cod
                    })
                }

            })
    }
    // Search for the initail location being passed into the component on first render
    useEffect(() => {
        getWeather(location)
    }, [])

    // conditional rendering based on state values
    return (
        <WeatherCard
            temp={main.averageTemp}
            minTemp={main.minTemp}
            maxTemp={main.maxTemp}
            city={city}
            country={country}
            main={weather.main}
            error={errorMessage}
            loading={loading}
            output={false}
            SearchCity={getWeather}
        />
    )
}

export default WeatherEngine;

