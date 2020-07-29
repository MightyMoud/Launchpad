/**@jsx jsx */
import React, { useEffect, useState } from "react";
//import { Link } from '@reach/router'
import { jsx } from "theme-ui";
import { Box } from "@theme-ui/components";

import ThemeProvider from "../../components/ThemeProvider";
import WeatherPage from "./WeatherPage";

const Weather = () => {
  return (
    <ThemeProvider>
      <Box bg="background3">
        <WeatherPage />
      </Box>
    </ThemeProvider>
  );
};

export default Weather;
