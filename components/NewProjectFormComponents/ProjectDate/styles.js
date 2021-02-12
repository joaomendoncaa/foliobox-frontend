import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 3rem;
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
`

export const Description = styled.span`
    font-size: 1rem;
    font-weight: 400;

    padding: .5rem 0 1.5rem 0;

    color: var(--text-secondary-dark);
`
export const InputsWrapper = styled.div`
    display: flex;

    section {
        width: 50%;
    }
`