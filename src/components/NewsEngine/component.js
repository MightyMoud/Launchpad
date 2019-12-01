/**@jsx jsx */
import React, { useEffect, useState, useReducer } from 'react';
import { jsx } from 'theme-ui';
import { Text, Select, Label, Box, Flex, Image, Badge, Link } from '@theme-ui/components';
import Skeleton from 'react-loading-skeleton';

import ThemeProvider from '../ThemeProvider'
import NewsCard from '../NewsCard/component'

const inistialState = {
    loading: true,
    articles: []
}

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
                articles: action.articles
            }
        default:
            break;
    }
}

const NewsEngine = () => {
    const key = '83d5f922d84d4045b48a031c24af6fa7';

    const [state, dispatch] = useReducer(reducer, inistialState)
    const { loading, articles } = state;

    const [country, setCountry] = useState('AU');
    const [category, setCategory] = useState('business');


    const getNews = async () => {
        dispatch({
            type: 'SEARCH_PROGRESS'
        })
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}&pageSize=3`)
        let resJSON = await res.json();
        let articles = await resJSON.articles;
        dispatch({
            type: 'SEARCH_SUCCESS',
            articles: articles
        })
    }

    useEffect(() => {
        getNews();
    }, [country, setCountry, category, setCategory])

    return (
        <ThemeProvider>
            <Flex bg='background' p={2} sx={{ flexDirection: 'column' }} >
                {!loading ? articles.map((article) =>
                    <NewsCard
                        key={article.title}
                        imgLink={article.urlToImage}
                        title={article.title}
                        content={article.description}
                        source={article.source.name}
                        articleURL={article.url}
                    ></NewsCard>
                ) : (
                        <>
                            <NewsCard loading={loading} />
                            <NewsCard loading={loading} />
                            <NewsCard loading={loading} />
                        </>
                    )
                }
                <Box as='form' sx={{ color: 'text' }}>
                    <Label htmlFor='country'>Country</Label>
                    <Select onChange={(e) => setCountry(e.target.value)} value={country} name='country' mb={3}>
                        <option value='au'>Australia</option>
                        <option value='CA'>Canada</option>
                        <option value='us'>USA</option>
                    </Select>
                    <Label htmlFor='Category'>Category</Label>
                    <Select onChange={(e) => setCategory(e.target.value)} value={category} name='country' mb={3}>
                        <option value='business'>Business</option>
                        <option value='technology'>Technology</option>
                        <option value='sports'>Sports</option>
                    </Select>
                </Box>
            </Flex>
        </ThemeProvider>
    )
}

export default NewsEngine;