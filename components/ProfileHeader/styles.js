import styled, { css } from 'styled-components'

export const Container = styled.div`
    position: relative;
`

export const NavWrapper = styled.div`
    padding: 0 var(--horizontal-padding) 0 var(--horizontal-padding);
    border-bottom: 1px solid var(--border-main);
    background: white;

    width: 100vw;

    display: flex;
    align-items: center;

    ${props => props.fixed && css`
        position: fixed;
        top: 86px;
    `}
`

export const Placeholder = styled.div`
    height: ${props => props.height + 'px'};
`