import styled from 'styled-components'

export const Container = styled.div`
    /* overflow-x: hidden;s */
`

export const Main = styled.div`
    width: 100%;
    padding: 2rem var(--horizontal-padding) 2rem var(--horizontal-padding);

    @media (min-width: 900px) {
        padding: 2rem var(--horizontal-padding) 2rem calc(var(--horizontal-padding) * 2);
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {} 
`