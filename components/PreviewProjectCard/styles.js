import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid var(--border-main);
    border-radius: 5px;

    overflow: hidden;

    max-height: 400px;

    max-width: 360px;
    min-width: 360px;

    background: var(--background-main);
`

export const ProjectInfoWrapper = styled.div`
    padding: 1rem;
`

export const TitleAndDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        display: flex;
        align-items: center;

        svg {
            margin-right: .5rem;
        }
    }
`

export const Description = styled.div`
    padding: 1.25rem 0;
    word-wrap: break-word;

    div:not(:first-child) {
        margin-top: .25rem;
    }
`

export const TechnologiesWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    div:not(:first-child) {
        margin-left: .75rem;
    }

    margin-bottom: 1.25rem;
`

export const ProjectButton = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: .4rem;
    }

    padding: .25rem 0;
`

export const ProjectImagesWrapper = styled.div`
    width: 100%;
    height: 250px;
`
