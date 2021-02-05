import styled from 'styled-components'

export const Container = styled.div`
    padding: 1rem var(--horizontal-padding);

    display: grid;
    grid-template: 
        "userimage username" auto
        "userdesc userdesc" auto
        "userlinks userlinks" auto
        / auto 1fr;

    align-items: center;

    @media (min-width: 900px) {
        padding: 0 0 0 var(--horizontal-padding);
        grid-template: 
            "userimage" auto
            "username" auto
            "userdesc" auto
            "userlinks" auto
            / 1fr;

        position: absolute;
        top: 6rem;
        left: 0;
        z-index: 1;

    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
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

    overflow: hidden;

    div {
        width: 100%;
        margin: 0 auto!important;

        overflow: hidden;
    }

    @media (min-width: 900px) {
        width: 280px;
        height: 280px;

        margin-bottom: 1rem;

    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const UsernameWrapper = styled.div`
    grid-area: username;

    justify-content: center;

    padding-left: 1rem;

    h1 {
        font-size: 1.5rem;
    }

    span {
        display: flex;
        align-items: center;
        color: var(--text-secondary-light);
        font-weight: thin;

        svg {
            width: 17.5px;
            height: 17.5px;
            margin-right: 10px;

            path {
                fill: var(--text-secondary-light);
            }
        } 
    }

    @media (min-width: 900px) {
        padding-left: 0;

        h1 {
            font-size: 1.5rem;
        }
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const UserDescription = styled.div`
    grid-area: userdesc;

    font-size: 1.2rem;

    margin: 1rem 0;

    @media (min-width: 900px) {
        font-size: 1rem;
        max-width: 250px;
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const UserLinks = styled.div`
    grid-area: userlinks;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
