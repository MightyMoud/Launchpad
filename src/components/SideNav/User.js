/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Text, Flex, Avatar, } from '@theme-ui/components'

import ThemeProvider from "../ThemeProvider";


const User = () => {
    return (
        <ThemeProvider>
            <Flex py={2} sx={{ flex: '0 0 22%', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', borderBottom: theme => `2px solid ${theme.colors.secondary}` }}>
                <Avatar src='https://secure.gravatar.com/avatar/cf742f1faa316aa9828230dd71f4affa?s=384' />
                <Text variant='text.h3'>
                    Mahmoud S. Mousa
                    </Text>
            </Flex>
        </ThemeProvider>
    );
}

export default User;