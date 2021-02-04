import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: .75rem;
    }
`

export const IconWrapper = styled.div`
    width: 20px;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    svg {    
        width: 20px;
        height: 20px;


        * {
            fill: var(--text-secondary-light);
        }
    }
`

export const InfoSpan = styled.div`
    margin-left: .5rem;

    font-weight: thin;

    color: var(--text-secondary-light);
`
