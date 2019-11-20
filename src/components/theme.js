import { toTheme } from '@theme-ui/typography'
import legibleTheme from 'typography-theme-legible'
import merge from 'lodash.merge'

const typography = toTheme(legibleTheme)

const heading = {
    fontFamily: 'heading',
    lineHeight: 'heading',
    fontWeight: 'heading',
    color: 'textHeading',
    letterSpacing: '-0.05em',
    textDecoration: 'none'
}

const body = {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    letterSpacing: '-0.02em',
    textDecoration: 'none'
}

export default merge(typography, {
    colors: {
        textBody: 'hsla(0, 0%, 0%, 0.93)',
        textHeading: 'hsla(0, 0%, 0%, 0.86)',
        background: '#fff',
        primary: '#33e',
    },
    px: [
        5, 10, 20, 25, 30
    ],
    fontSizes: [
        12, 14, 16, 18, 24, 32, 48, 64, 72,
    ],
    text: {
        heading: {
            ...heading,
            fontSize: 5,
        },
        body: {
            ...body,
            color: 'textBody'
        },
        links: {
            ...body,
            textDecoration: 'none',
            listStyle: 'none'
        },
        caps: {
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
        },
    }
})