import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    darkMode: 'class',
    plugins: [
        nextui({
            addCommonColors: true,
            themes: {
                dark: {
                    colors: {
                        background: '#1E2019',
                        foreground: {
                            50: '#ffe9e5',
                            100: '#f5c6be',
                            200: '#e9a195',
                            300: '#df7c6d',
                            400: '#d55744',
                            500: '#bb3e2a',
                            600: '#922f20',
                            700: '#6a2116',
                            800: '#41120c',
                            900: '#1c0300',
                            DEFAULT: '#a43524',
                        },
                        primary: {
                            50: '#fff7da',
                            100: '#ffe6ad',
                            200: '#ffd67d',
                            300: '#ffc64b',
                            400: '#ffb51a',
                            500: '#e69c00',
                            600: '#b37900',
                            700: '#815700',
                            800: '#4e3400',
                            900: '#1e1000',
                            DEFAULT: '#FFB20F',
                        },
                        success: {
                            50: '#e4fce9',
                            100: '#bff1c9',
                            200: '#98e7a7',
                            300: '#70dd85',
                            400: '#49d362',
                            500: '#31ba49',
                            600: '#249038',
                            700: '#186727',
                            800: '#0b3e16',
                            900: '#001702',
                            DEFAULT: '#84E296',
                        },
                    },
                },
            },
        }),
    ],
}

export default config
