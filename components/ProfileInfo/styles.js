import styled from 'styled-components'

export const Container = styled.div`
    padding: 1rem var(--horizontal-padding);

    display: grid;
    grid-template: 
        "userimage username" auto
        "userdesc userdesc" auto
        "userlinks userlinks" auto
        / 1fr 4fr;

    align-items: center;
`

export const ProfileImageWrapper = styled.div`
    grid-area: userimage;

    width: 70px;
    height: 70px;

    background-color: var(--background-main);

    border: 1px solid var(--border-main);
    border-radius: 99vw;

    position: relative;

    display: flex;
    justify-content: center;

    div {
        width: 85%;
        margin: 0 auto!important;
    }
`

export const UsernameWrapper = styled.div`
    grid-area: username;

    justify-content: center;

    h1 {
        font-size: 1.5rem;
    }
`

export const UserDescription = styled.div`
    grid-area: userdesc;

    margin: 1rem 0;
`

export const UserLinks = styled.div`
    grid-area: userlinks;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
