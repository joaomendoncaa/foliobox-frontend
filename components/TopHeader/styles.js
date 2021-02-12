import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    padding: 2rem var(--horizontal-padding);
    
    background-color: var(--primary-darkblue);
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;

    z-index: 2;
`

export const LinkButton = styled.a`
    color: white;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`

export const Placeholder = styled.div`
    background: red;
    height: ${props => props.height + 'px'};
`