/**@jsx jsx */
import React, { useEffect, useReducer, useState } from 'react';
import { jsx } from 'theme-ui';
import { Container, Box, Flex } from '@theme-ui/components';
import { lighten } from '@theme-ui/color'

import ThemeProvider from '../ThemeProvider'
import HabitsGraph from './HabitsGraph';
import HabitsSummary from './HabitsSummary';

const HabitsEngine = () => {
    return (
        <ThemeProvider>
            <Container>
                <Flex sx={{ flexDirection: 'row' }}>
                    <Box m={1} sx={{ position: 'relative', bg: lighten('background', 0.1), flex: '1 0 30%' }}>
                        <HabitsSummary />
                    </Box>
                    <Box m={1} sx={{ bg: lighten('background', 0.1), flex: '0 1 70%', height: 'calc(33vh - 60px)' }}>
                        <HabitsGraph />
                    </Box>
                </Flex>
            </Container>
        </ThemeProvider>
    );
}

export default HabitsEngine;