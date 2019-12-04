/**@jsx jsx */
import React, { useEffect, useReducer, useState } from 'react';
import { jsx } from 'theme-ui';
import { Container, Box, Flex } from '@theme-ui/components';
import { ResponsiveLine } from '@nivo/line';

import theme from '../theme'
import ThemeProvider from '../ThemeProvider'
import { lighten } from '@theme-ui/color';

const HabitsGraph = () => {

    const data = [{
        id: 'Happiness',
        color: theme.colors.primary,
        "label": "Daily Happiness Index",
        data: [{
            x: '2019-11-20',
            y: 30,
            label: "Happiness Index",
            max: 10000,
            unit: '%',
        },
        {
            x: '2019-11-21',
            y: 40,
            label: "Happiness Index",
            max: 10000,
            unit: '%',
        },
        {
            x: '2019-11-22',
            y: 70,
            label: "Happiness Index",
            max: 10000,
            unit: '%',
        },
        {
            x: '2019-11-23',
            y: 80,
            label: "Happiness Index",
            max: 10000,
            unit: '%',
        },
        {
            x: '2019-11-24',
            y: 40,
            label: "Daily steps",
            max: 10000,
            unit: '%',
        }]
    },
    {
        id: 'Steps',
        color: theme.colors.secondary,
        data: [{
            x: '2019-11-20',
            y: 20,
            label: "Daily steps",
            max: 10000,
            unit: 'steps',
        },
        {
            x: '2019-11-21',
            y: 60,
            label: "Daily steps",
            max: 10000,
            unit: 'steps',
        },
        {
            x: '2019-11-22',
            y: 80,
            label: "Daily steps",
            max: 10000,
            unit: 'steps',
        },
        {
            x: '2019-11-23',
            y: 110,
            label: "Daily steps",
            max: 10000,
            unit: 'steps',
        },
        {
            x: '2019-11-24',
            y: 50,
            label: "Daily steps",
            max: 10000,
            unit: 'steps',
        }]
    }
    ]

    return (
        <ThemeProvider>
            <ResponsiveLine
                data={data}
                curve='natural'
                enableGridX={false}
                enableGridY={false}
                enableArea={true}
                areaOpacity='0.5'
                areaBlendMode='normal'
                useMesh={true}
                enableCrosshair={false}
                margin={{ top: 60, right: 100, bottom: 30, left: 60 }}
                xScale={{
                    type: 'time',
                    format: '%Y-%m-%d',
                    precision: 'day',
                }}
                xFormat="time:%m-%d"
                axisBottom={{
                    orient: 'bottom',
                    format: '%b %d',
                    tickValues: 'every day',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Day',
                    legendOffset: 26,
                    legendPosition: 'middle'
                }}
                yFormat={value => `${value}%`}
                tooltip={(d) => (
                    <div
                        style={{
                            background: 'white',
                            borderRadius: '5px',
                            padding: '5px',
                            boxShadow: '2px 2px 6px rgba(255,255,255, 0.5)',
                            fontFamily: 'Montserrat'
                        }}
                    >
                        {`Date: ${d.point.data.xFormatted}`} <br />
                        {`${d.point.data.label}: ${d.point.data.y * (d.point.data.label === 'Daily steps' ? 100 : 1)} ${d.point.data.unit}`}<br />
                    </div>
                )}
                axisLeft={{
                    format: value => `${value}%`,
                    orient: 'left',
                    tickValues: [0, 20, 40, 60, 80, 100],
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Happiness index',
                    legendOffset: -50,
                    legendPosition: 'middle'
                }}
                colors={{ datum: 'color' }}
                pointSize={12}
                pointBorderWidth={1}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        itemTextColor: '#fff',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }]}
                theme={{
                    axis: {
                        ticks: {
                            line: {
                                stroke: "white"
                            },
                            text: {
                                fill: "white",
                                fontFamily: 'Montserrat'
                            }
                        },
                        legend: {
                            text: {
                                fill: 'white',
                                fontFamily: 'Montserrat'
                            },
                        },
                        tooltip: {
                            container: {
                                fill: 'white'
                            }
                        }
                    },
                    legends: {
                        text: {
                            fill: 'white'
                        }
                    }
                }}

            />
        </ThemeProvider>
    );
}

export default HabitsGraph;