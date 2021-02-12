import styled from 'styled-components'

export const Container = styled.div`
    width: calc(100%);
    padding: .5rem var(--horizontal-padding);

    ${props => (props.isPositionAbsolute === true) ? 'position: absolute;bottom: 1rem;left: 0;z-index: 1;' : ''}

    .footer-separator {
        color: var(--separator-light);
        margin-bottom: 1rem;
    }

    .copyright-span {
        color: var(--text-secondary-light);
    }

    @media (min-width: 600px) {
        padding: 2rem var(--horizontal-padding);

        .footer-separator {
            margin-bottom: 2rem;
        }
    }
    @media (min-width: 900px) {}
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 600px) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    @media (min-width: 900px) {}
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const BuiltWithWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 1rem;

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

    @media(min-width: 600px) {
        margin-top: 0;
    }
    @media(min-width: 900px) {
        span {
            font-size: 1rem;
            margin: 0 0.5rem 0 0;

            a {
                font-weight: bold;
                margin-left: .5rem;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
    @media(min-width: 1200px) { }
    @media(min-width: 1800px) { }
`
