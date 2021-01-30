import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    .separator {
        width: 93px;
        margin: 2rem 0;
    }    

    p {
        max-width: 300px;
        text-align: center;
        color: var(--text-secondary-dark);
    }

    .create-github-account {
        cursor: pointer;
        text-decoration: 1px solid black;
    }
`

export const IllustrationWrapper = styled.div`
    

    position: relative;

    background: red;
`

export const IconButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    border-radius: 5px;
    color: white;
    background: var(--primary-darkblue);
    cursor: pointer;

    span {
        margin-left: 1rem;
    }
`
