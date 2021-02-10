import styled from 'styled-components'

export const Container = styled.div`
    

`

export const Main = styled.div`
    padding: 0 var(--horizontal-padding);

    display: grid;
    grid-template:
        "preview form" auto
        / auto calc(60vw - (var(--horizontal-padding) * 2));

    @media (min-width: 900px) {}
    @media (min-width: 1200px) {
        grid-template:
        "preview form" auto
        / auto calc(70vw - (var(--horizontal-padding) * 2));
    }
    @media (min-width: 1800px) {
        grid-template:
        "preview form" auto
        / auto calc(75vw - (var(--horizontal-padding) * 2));
    }
`

export const CreateProjectForm = styled.form`
    grid-area: form;

    .name-input {

        &:focus {
        }
    }
`
