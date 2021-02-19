import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 5rem;
`

export const Title = styled.h1`
    font-size: 1.3rem;
    font-weight: 600;
`

export const Description = styled.span`
    font-size: 1rem;
    font-weight: 400;

    padding: .5rem 0 1.5rem 0;

    color: var(--text-secondary-dark);
`

export const ImageInputWrapper = styled.div`

    .images-container {
        .new-image-label {
            display: flex;
            justify-content: center;
            align-items: center;

            cursor: pointer;

            height: 56px;
            width: 100%;
            border: 1px dashed var(--text-secondary-dark);
            border-radius: 10px;

            transition: .1s ease-in;

            &:hover {
                background: rgba(0, 0, 0, 0.025);
            }
        }
    }

    .file-input {
        display: none;
    }
`