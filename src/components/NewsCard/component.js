/**@jsx jsx */
import React, { useEffect, useState } from 'react';
import { jsx } from 'theme-ui';
import { Text, Box, Container, Image, Badge, Link } from '@theme-ui/components'
import Skeleton from 'react-loading-skeleton';

import ThemeProvider from '../ThemeProvider'
import NewsImage from './NewsImage';
import NewsTextCon from './NewsTextCon';
import NewsTitle from './NewsTitle';
import NewsBody from './NewsBody';

const NewsCard = ({ imgLink, title, content, source, articleURL, loading }) => {
    return (
        <ThemeProvider>
            <Container variant='layout.NewsCardCon'>
                {loading ? <Skeleton width={170} height={200} duration={0.5} /> : <NewsImage url={imgLink} />}
                <NewsTextCon>
                    {loading ? <Skeleton width={400} duration={0.5} /> : <NewsTitle title={title} />}
                    {loading ? <Skeleton count={2} duration={0.5} /> : <NewsBody content={content} />}
                    <Box sx={{ position: 'absolute', top: '75%' }}>
                        {loading ? <Skeleton width={40} height={14} duration={0.5} /> : <Badge mx={0} px={1} bg='primary'> {source}</Badge>}
                    </Box>
                    <Text variant='text.body' className='more' sx={{ top: '120%', left: '80%', position: 'absolute', transform: 'translate(-50%)', willChange: 'top', transition: 'all 200ms ease-in-out' }}>
                        <Link href={articleURL}>
                            Read More &#8658;
                        </Link>
                    </Text>
                </NewsTextCon>
            </Container>
        </ThemeProvider >
    );
}

export default NewsCard;