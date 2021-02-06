import styled, { css } from 'styled-components'

export const Container = styled.div`
    width: 100%;

    padding: 0;

    display: flex;

    h1 {
        color: red;
    }

    @media (min-width: 900px) {
        padding-left: var(--horizontal-padding);
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const NavButton = styled.button`
    display: flex;
    align-items: center;

    background: transparent;

    position: relative;

    border: 0;

    padding: 1.25rem 1rem;

    transition: 1s forwards ease-in;

    svg {
        pointer-events: none;
        margin-right: .75rem;

        display: none;

        path {
            fill: var(--border-main);
        }
    }

    span {
        pointer-events: none;
        font-size: 1rem;
        margin-right: 1rem;

        font-weight: 400;

        color: var(--border-main);
    }

    .projects-amount {
        pointer-events: none;
        background: var(--border-main);
        border-radius: 99vw;

        font-size: .75rem;
        font-weight: bold;

        color: var(--text-primary-dark);
        padding: .4rem .5rem;
    }

    &:hover {
        cursor: pointer;

        span {
            color: var(--text-secondary-light);
        }

        svg {
            path {
                fill: var(--text-secondary-light);
            }
        }

        .projects-amount {
            background: var(--text-secondary-light);
            color: var(--text-primary-dark);
        }

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;

            height: 1px;
            background: var(--text-secondary-light);
        }
    }

    &:focus {
        outline: 0;
    }


    &.active {
        span {
            color: var(--primary-darkblue);
        }

        svg {
            path {
                fill: var(--primary-darkblue);
            }
        }

        .projects-amount {
            background: var(--primary-darkblue);
            color: var(--text-primary-dark);
        }

        &:after {
            content: '';
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            width: 100%;

            height: 4px;
            background: var(--primary-darkblue);
        }
    }

    @media (min-width: 900px) {
        svg {
            display: inherit;
        }
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`