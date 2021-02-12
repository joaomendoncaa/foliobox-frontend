import styled, { css } from 'styled-components'

export const Container = styled.div`
    
`

export const Content = styled.div`
    ${props => props.fixed && css`
        position: fixed;
        top: 86px;
    `}

    padding: 1rem var(--horizontal-padding);

    background: var(--background-main);
    border-bottom: 1px solid var(--border-main);
    background: var(--background-main);

    width: 100%;

    z-index: 500;

    display: grid;
    grid-template:
        "preview form" auto
        / auto calc(60vw - (var(--horizontal-padding) * 2));

    @media (min-width: 900px) {}
    @media (min-width: 1200px) {
        grid-template:
        "preview form" auto
        / auto calc(70vw - (var(--horizontal-padding) * 2));
    }
    @media (min-width: 1800px) {
        grid-template:
        "preview form" auto
        / auto calc(75vw - (var(--horizontal-padding) * 2));
    }
`

export const Title = styled.div`
    font-size: 3rem;
    font-weight: 600;
    color: var(--border-main);
`

export const LivePreviewWrapper = styled.div`
    grid-area: preview;
`

export const NewProjectWrapper = styled.div`
    grid-area: form;
`

export const Placeholder = styled.div`
    ${props => props.height && css`
        height: calc(${props.height + 'px'});
    `};
`
