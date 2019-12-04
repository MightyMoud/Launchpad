/**@jsx jsx */
import React, { useEffect, useReducer, useState } from 'react';
import { jsx } from 'theme-ui';
import { Container, Text, Box } from '@theme-ui/components';
import { lighten } from '@theme-ui/color'
import { ResponsivePie } from '@nivo/pie';


import theme from '../theme'
import ThemeProvider from '../ThemeProvider'

const HabitsSummary = () => {

    const data = [
        {
            "id": "Gym Workout",
            "label": "6 days Weightlifting",
            'input': 4,
            'max': 6,
            'unit': 'days',
            "value": 67,
            "color": theme.colors.primary
        },
        {
            "id": "Early Riser",
            "label": "Wake up before 6am",
            'input': 3,
            'max': 7,
            'unit': 'days',
            "value": 42,
            "color": theme.colors.secondary
        },
        {
            "id": "Daily Reading",
            "label": "Read everyday",
            'input': 6,
            'max': 6,
            'unit': 'days',
            "value": 100,
            "color": theme.colors.gray
        },
        {
            "id": "Coding Hours",
            "label": "Code for 5 hours a day",
            'input': 16,
            'max': 30,
            'unit': 'hours',
            "value": (16 * 100 / 30).toFixed(0),
            "color": theme.colors.blueHigh
        },
    ]

    return (
        <ThemeProvider>
            <Container m={2} sx={{ textAlign: 'center' }}>
                <Text variant='text.h3'>
                    Last Week's Summary
                </Text>
            </Container>
            <Box sx={{ position: 'absolute', width: '100%', height: 'calc(33vh - 100px)' }}>
                <ResponsivePie
                    data={data}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    innerRadius={0.5}
                    padAngle={1}
                    cornerRadius={5}
                    colors={{ datum: 'color' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    radialLabel={d => `of ${d.max} ${d.unit}`}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor={theme.colors.text}
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    sliceLabel={d => `${d.value}%`}
                    slicesLabelsTextColor={theme.colors.text}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                    tooltip={(d) => (
                        <div
                            style={{
                                background: 'white',
                                borderRadius: '5px',
                                padding: '1px',
                                boxShadow: '1px 1px 3px rgba(255,255,255, 0.5)',
                                fontFamily: 'Fira Sans'
                            }}
                        >
                            {`Habit: ${d.label}`} <br />
                            {`Progress: ${d.input} out of ${d.max} ${d.unit}`}
                        </div>
                    )}
                    legends={[
                        {
                            anchor: 'top left',
                            direction: 'column',
                            translateY: 56,
                            itemWidth: 100,
                            itemHeight: 25,
                            itemTextColor: theme.colors.text,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: theme.colors.secondary
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </Box>
        </ThemeProvider>
    );
}

export default HabitsSummary;