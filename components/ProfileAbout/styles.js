import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid var(--border-main);
    border-radius: 10px;

    padding: 0 2rem 3rem 2rem;

    background: ${props => props.theme.backgroundMain};

    .react-markdown {
        padding: 1rem;
    }
`

export const ReadmeTitle = styled.div`
    padding: 2rem 0;

    #readme {
        font-weight: bold;
    }
`
