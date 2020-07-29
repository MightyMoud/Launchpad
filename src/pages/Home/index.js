/**@jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx } from "theme-ui";
import { Grid, Container, Flex, Text } from "@theme-ui/components";
import { lighten, darken } from "@theme-ui/color";

import ThemeProvider from "../../components/ThemeProvider";
import HabitsEngine from "../../components/HabitsEngine/component";
import "../../App.css";
import TimeEngine from "../../components/TimeEngine/component";
import WeatherBlock from "./WeatherBlock";
import NewsBlock from "./NewsBlock";

const Home = () => {
  return (
    <ThemeProvider>
      <Grid
        sx={{
          width: "100%",
          height: "calc(100vh - 22px)",
          gridTemplateColumns: "1fr 3fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gridGap: "10px"
        }}
      >
        <WeatherBlock className="box1" />
        <NewsBlock className="box3" />
        <Container
          className="box2"
          p={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            bg: lighten("background", 0.07)
          }}
        >
          <Text
            variant="text.h2"
            sx={{
              textAlign: "center",
              color: darken("text", 0.07),
              selfJustify: "flex-start"
            }}
          >
            Global Time
          </Text>
          <TimeEngine location="sydney, au" />
          <TimeEngine location="New York, USA" />
        </Container>
        <Container className="box3" sx={{ bg: lighten("background", 0.07) }}>
          <Text
            variant="text.h2"
            sx={{
              textAlign: "center",
              color: darken("text", 0.07),
              selfJustify: "flex-start"
            }}
          >
            Habit Tracker
          </Text>
          <Flex>
            <HabitsEngine />
          </Flex>
        </Container>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
