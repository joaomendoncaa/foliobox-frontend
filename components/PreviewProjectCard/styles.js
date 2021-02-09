import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid var(--border-main);
    border-radius: 5px;

    padding: .75rem;
`

export const ProjectInfoWrapper = styled.div`

`

export const TitleAndDate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        display: flex;
        align-items: center;
    }
`

export const Description = styled.div`

`

export const TechnologiesWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    &:hover {
        background: red;
        margin-left: 1rem;
    }
`

export const ProjectButton = styled.div`
    display: flex;
    align-items: center;

    svg {
        margin-right: .4rem;
    }
`

export const ProjectImagesWrapper = styled.div`

`
