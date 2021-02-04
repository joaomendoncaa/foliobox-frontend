import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    height: calc(100vh - ${props => props.height + 'px'});
    
    background: var(--primary-darkblue);

    padding: 0 var(--horizontal-padding);

    /* overflow-x: hidden; */

    display: grid;
    grid-template: 
        "text" auto
        "links" auto
        "illustration" 50%
        / calc(100vw - var(--horizontal-padding));

    @media (min-width: 600px) {
        grid-template: 
            "text" auto
            "links" auto
            "illustration" 50%
            / calc(100vw - var(--horizontal-padding));
    }
    @media (min-width: 900px) {
        grid-template: 
            "text text" 1fr
            "links illustration" 2fr
            / calc(30vw - var(--horizontal-padding)) calc(70vw - var(--horizontal-padding));
    }
    @media (min-width: 1200px) {
        grid-template: 
            "text text" 1fr
            "links illustration" 2fr
            / calc(40vw - var(--horizontal-padding)) calc(60vw - var(--horizontal-padding));
    }
    @media (min-width: 1800px) {}
`

export const TextsWrapper = styled.div`
    grid-area: text;

    max-width: calc(100vw - (var(--horizontal-padding) * 2));
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h1 {
        color: var(--text-primary-dark);
        font-size: 2.2rem;
        max-width: 300px;

        margin: 0 0 .5rem 0;
    }

    p {
        color: var(--text-secondary-dark);
        font-size: 1rem;
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
        }
    }
    @media (min-width: 1200px) {

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
    grid-area: links;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    padding-bottom: 4rem;

    @media (min-width: 600px) {}
    @media (min-width: 900px) {}
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}
`

export const LinkMakeMyFolio = styled.a`
    background: white;
    color: black;
    font-weight: bold;

    border-radius: 5px;
    padding: .5rem 2rem;

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

            &:hover {
                text-decoration: underline;
            }
        }
    }

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        span {
        font-size: 1rem;
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
    width: calc(100vw - (var(--horizontal-padding) * 2));
    grid-area: illustration;
    position: relative;

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        width: calc(60vw - var(--horizontal-padding));
    }
    @media (min-width: 1800px) {}
`
