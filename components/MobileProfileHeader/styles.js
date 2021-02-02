import styled, { css } from 'styled-components'

export const NavWrapper = styled.div`
    padding: 0 var(--horizontal-padding) 0 var(--horizontal-padding);
    background: white;

    ${props => props.fixed && css`
        position: fixed;
        top: 86px;
    `}
`

export const Placeholder = styled.div`
    height: ${props => props.height + 'px'};
`