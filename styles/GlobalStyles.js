import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root {
        --primary-darkblue: #15141f;

        --text-primary-dark: #fff;
        --text-secondary-dark: #ACACAC;

        --horizontal-padding: 2rem;
    }

    html,
    body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    @media (min-width: 600px) {
        :root {
            --horizontal-padding: 3rem;
        }
    }
    @media (min-width: 900px) {
        :root {
            --horizontal-padding: 4rem;
        }
    }
    @media (min-width: 1200px) {
        :root {
            --horizontal-padding: 12rem;
        }
    }
    @media (min-width: 1800px) {
        :root {
            --horizontal-padding: 20rem;
        }
    }
    @media (min-width: 3000px) {
        :root {
            --horizontal-padding: 40rem;
        }
    }
`