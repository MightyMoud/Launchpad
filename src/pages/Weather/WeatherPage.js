/**@jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx } from "theme-ui";
import { Box, Flex, Image } from "@chakra-ui/core";

import ImageEngine from "./ImageEngine";

const WeatherPage = () => {
  const [city, seCity] = useState("");
  const [img, setImg] = useState("");

  ImageEngine("new york").then(res => setImg(res));

  // async function getGeo(query) {
  //   const res = await fetch(
  //     `https://api.opencagedata.com/geocode/v1/json?q=${query}&limit=1&key=5ab75b81d3ba4278a9a2f139af9e5582`
  //   );
  //   const resJson = await res.json();
  //   return resJson;
  // }
  // async function getWeather(geo) {
  //   const res = await fetch(
  //     `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/e2ddd4e6ad166908c6e3af4c7868daf6/${geo.lat},${geo.lng}`
  //   );
  //   const resJson = await res.json();
  //   console.log(resJson);
  //   return resJson;
  // }
  // getGeo("sydney,au")
  //   .then(res => res.results[0].geometry)
  //   .then(geo => getWeather(geo));

  return (
    <Flex>
      <Box
        p={0}
        boxSizing="border-box"
        w="600px"
        h="400px"
        rounded="20px"
        bg="gray"
        overflow="hidden"
      >
        <Image src={img} />
      </Box>
    </Flex>
  );
};

export default WeatherPage;
