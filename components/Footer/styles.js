import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    padding: 2rem var(--horizontal-padding);

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: row;

    position: relative;

    .footer-separator {
        position: absolute;
        top: 0;
        width: calc(100% - (var(--horizontal-padding) * 2));
        color: var(--separator-light);
    }

    .copyright-span {
        color: var(--text-secondary-light);
    }
`

export const BuiltWithWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    /* Spacing for the spans and the heart icon */
    div {
        margin-right: .5rem;
    }

    span {
        color: var(--text-secondary-light);
        margin: 0 .5rem 0 0;

        a {
            font-weight: bold;
            margin-left: .5rem;
        }
    }

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        span {
        font-size: 1rem;
        margin: 0 .5rem 0 0;

        a {
            font-weight: bold;
            margin-left: .5rem;
        }
    }
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`
