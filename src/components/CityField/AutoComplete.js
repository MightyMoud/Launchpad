/**@jsx jsx */
import React, { useState, Children } from 'react';
import Autosuggest from 'react-autosuggest';
import { Icon } from 'antd';
import { jsx } from 'theme-ui';
import { Close } from '@theme-ui/components';

import ThemeProvider from '../ThemeProvider'
import './styles.css'
//import { citiesList } from './citiesList.js'

const AutoComplete = (props) => {

    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [city, setCity] = useState('');

    const citiesList = [{ city: 'cairo', country: 'egypt' }, { city: 'new york', country: 'usa' }]

    // Teach Autosuggest how to calculate suggestions for any given input value.
    const getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
        let count = 0;
        return inputLength === 0 ? [] : citiesList.filter(city =>
            city.city.toLowerCase().slice(0, inputLength) === inputValue && count++ < 5
        );
    };

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    function getSuggestionValue(suggestion) {
        return `${suggestion.city},${suggestion.country}`;
    };

    // Use your imagination to render suggestions.
    const renderSuggestion = suggestion => (
        <div className='slideIn'>
            {suggestion.city}, {suggestion.country}
        </div>
    );

    const onChange = (e, { newValue }) => {
        setValue(newValue);
        setCity(newValue);
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const resetInputFiled = (e) => {
        setCity("");
    }
    const searchWeather = (e) => {
        e.preventDefault();
        props.searchCity(city);
        resetInputFiled();
    }

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
        placeholder: 'Search for a city',
        value,
        onChange: onChange
    };

    const handleEnterButton = (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            props.searchCity(city);
            resetInputFiled();
        }
    }

    const autosuggestStyle = {
        'input': 'fieldOpen',
        'suggestionsContainer': 'suggestionCon',
        'suggestionsList': 'suggestionList',
        'containerOpen': 'suggestionConOpen',
        'suggestionFirst': 'firstSuggestion',
        'suggestionHighlighted': 'suggestionHighlighted'
    };

    return (
        <ThemeProvider>
            <form className='searchOpen'>
                <Icon style={{ color: 'white' }} type="search" className='searchIcon' />
                <Autosuggest
                    theme={autosuggestStyle}
                    highlightFirstSuggestion={true}
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                />
                {props.children}
                <input
                    className='searchBtn'
                    onClick={searchWeather}
                    onKeyDown={handleEnterButton}
                    type="submit"
                    value="GO"
                />
            </form>
        </ThemeProvider>
    );
}


export default AutoComplete;