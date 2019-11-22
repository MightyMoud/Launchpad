import { toTheme } from '@theme-ui/typography'
import legibleTheme from 'typography-theme-legible'
import merge from 'lodash.merge'
import { deep } from '@theme-ui/presets'
import { lighten } from '@theme-ui/color'


const typography = toTheme(legibleTheme)

const heading = {
    fontFamily: 'Merriweather, sans-serif',
    lineHeight: 'heading',
    fontWeight: '700',
    color: 'text',
    letterSpacing: '-0.05em',
    textDecoration: 'none'
}

const body = {
    fontFamily: 'Fira Sans, sans-serif',
    lineHeight: 'body',
    fontWeight: 'body',
    letterSpacing: '-0.02em',
    textDecoration: 'none',
    color: 'text'
}

export default merge(typography, {
    ...deep,
    alerts: {
        primary: {
            color: 'text',
            bg: 'muted'
        },
        feedback: {
            color: 'text',
            bg: 'background'
        },
        error: {
            color: 'text',
            background: '#f3511f'
        }
    },
    buttons: {
        close: {
            color: 'text',
        }
    },
    badges: {
        primary: {
            color: 'text',
            bg: 'primary',
        },
        outline: {
            color: 'primary',
            bg: 'transparent',
            boxShadow: 'inset 0 0 0 1px',
        },
        circle: {
            color: 'text',
            bg: 'muted',
            borderRadius: '50%'
        }
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
        h2: {
            ...heading,
            fontSize: 4,
        },
        h3: {
            ...body,
            fontSize: 3
        },
        symbols: {
            ...body,
            fontSize: 4
        },
        numbers: {
            fontFamily: 'Fira Sans, sans-serif',
            fontSize: 7,
            color: 'text'
        },
        body: {
            ...body,
            color: 'text'
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
    },
    styles: {
        ...deep.styles,
    },
    layout: {
        card: {
            borderRadius: '20px',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    },
})