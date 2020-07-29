/**@jsx jsx */
import React, { useEffect, useState, useReducer } from "react";
import { jsx } from "theme-ui";
import {
  Text,
  Select,
  Label,
  Box,
  Flex,
  Image,
  Badge,
  Link,
} from "@theme-ui/components";
import Skeleton from "react-loading-skeleton";

import ThemeProvider from "../ThemeProvider";
import NewsCard from "../NewsCard/component";
import CountryDropDown from "./CountryDropDown";
import CategoryDropDown from "./CategoryDropDown";

const inistialState = {
  loading: true,
  articles: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_PROGRESS":
      return {
        ...state,
        loading: true,
      };
    case "SEARCH_SUCCESS":
      return {
        ...state,
        loading: false,
        articles: action.articles,
      };
    default:
      break;
  }
};

const NewsEngine = () => {
  const key = "83d5f922d84d4045b48a031c24af6fa7";

  const [state, dispatch] = useReducer(reducer, inistialState);
  const { loading, articles } = state;

  const [country, setCountry] = useState("US");
  const [category, setCategory] = useState("Technology");

  const getNews = async () => {
    dispatch({
      type: "SEARCH_PROGRESS",
    });
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${key}&pageSize=3`
    );
    let resJSON = await res.json();
    let articles = await resJSON.articles;
    dispatch({
      type: "SEARCH_SUCCESS",
      articles: articles,
    });
  };

  useEffect(() => {
    getNews();
  }, [country, setCountry, category, setCategory]);

  return (
    <ThemeProvider>
      <Flex p={2} sx={{ flexDirection: "column", position: "relative" }}>
        <CountryDropDown
          value={country}
          change={(e) => setCountry(e.target.value)}
        />
        <CategoryDropDown
          value={category}
          change={(e) => setCategory(e.target.value)}
        />
        {!loading && !!articles ? (
          articles.map((article) => (
            <NewsCard
              key={article.title}
              imgLink={article.urlToImage}
              title={article.title}
              content={article.content}
              source={article.source.name}
              articleURL={article.url}
            ></NewsCard>
          ))
        ) : (
          <>
            <NewsCard loading={loading} />
            <NewsCard loading={loading} />
            <NewsCard loading={loading} />
          </>
        )}
      </Flex>
    </ThemeProvider>
  );
};

export default NewsEngine;
