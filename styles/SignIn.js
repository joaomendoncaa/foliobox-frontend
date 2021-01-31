import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    h1 {
        text-align: center;
    }

    .signin-separator {
        width: 93px;
        margin: 1rem 0;
    }    

    p {
        max-width: 400px;
        text-align: center;
        color: var(--text-secondary-dark);

        margin-bottom: 2rem;
    }

    .create-github-account {
        margin-top: 1rem;
        cursor: pointer;
        text-decoration: underline;
    }
`

export const IllustrationWrapper = styled.div`
    margin-top: 10vh;

    width: 100vw;
    height: 35vh;

    position: relative;
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

    transition: .1s ease-in;

    &:hover {
        transform: scale(1.05);
    }
`
