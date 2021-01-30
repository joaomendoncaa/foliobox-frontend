import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    
    background: var(--primary-darkblue);

    /* overflow-x: hidden; */

    display: grid;
    grid-template: 
        "text" auto
        "links" auto
        "illustration" 40vh
        / 100vw;

    @media (min-width: 600px) {
        grid-template: 
            "text" auto
            "links" auto
            "illustration" 35vh
            / 100vw;
    }
    @media (min-width: 900px) {
        grid-template: 
            "text text" 45vh
            "links illustration" auto
            "links illustration" auto
            / 30vw 60vw;
    }
    @media (min-width: 1200px) {
        grid-template: 
            "text text" 35vh
            "links illustration" auto
            "links illustration" auto
            / 40vw 60vw;
    }
    @media (min-width: 1800px) {}
`

export const TextsWrapper = styled.div`
    padding: 10vh var(--horizontal-padding) 0rem var(--horizontal-padding);
    grid-area: text;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    h1 {
        color: var(--text-primary-dark);
        font-size: 2.2rem;
        max-width: 300px;

        margin: 1.2rem 0 .5rem 0;
    }

    p {
        color: var(--text-secondary-dark);
        font-size: 1rem;

        margin-bottom: 3rem;
    }

    @media (min-width: 600px) {
        h1 {
            font-size: 3rem;
            max-width: 400px;
        }
        p {
            font-size: 1.2rem;
        }
    }
    @media (min-width: 900px) {
        h1 {
            font-size: 3.25rem;
            max-width: 500px;
        }
        p {
            font-size: 1.5rem;
            margin-bottom: 0;
        }
    }
    @media (min-width: 1200px) {
        padding: 15vh var(--horizontal-padding) 0rem var(--horizontal-padding);

        h1 {
            font-size: 3rem;
            max-width: 800px;
        }
        p {
            font-size: 1.1rem;
            max-width: 600px;
            margin-bottom: 0;
        }
    }
    @media (min-width: 1800px) {}
`

export const LinksWrapper = styled.div`
    padding: 0 var(--horizontal-padding) 10vh var(--horizontal-padding);
    grid-area: links;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        padding: 0 0 10vh var(--horizontal-padding);
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const LinkMakeMyFolio = styled.a`
    background: white;
    color: black;
    font-weight: bold;

    border-radius: 5px;
    padding: .5rem 2rem;

    margin-bottom: 4rem;

    transition: .1s ease-out;

    cursor: pointer;

    &:hover {
        background: transparent;
    
        color: white;

        border: 1px solid #fff;
    }

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        grid-area: left;
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const BuiltWithWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    /* Spacing for the spans and the heart icon */
    div {
        margin-right: .5rem;
    }

    span {
        color: white;
        margin: 0 .5rem 0 0;

        a {
            font-weight: bold;
            margin-left: .5rem;
        }
    }

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        span {
        font-size: .8rem;
        margin: 0 .5rem 0 0;

        a {
            font-weight: bold;
            margin-left: .5rem;
        }
    }
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const IllustrationWrapper = styled.div`
    width: 100vw;
    grid-area: illustration;
    position: relative;

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        width: 100%;
    }
    @media (min-width: 1800px) {}
`
