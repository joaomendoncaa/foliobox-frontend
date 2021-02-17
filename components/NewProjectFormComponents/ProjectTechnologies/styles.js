import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    margin-bottom: 4rem;
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

export const TechnologiesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    margin-bottom: 1rem;

    div {
        margin-right: 1rem;
        margin-bottom: .75rem;
    }
`

export const TechItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;

    padding: .2rem .5rem;

    border-radius: 4px;

    background: #F5F5F5;

    span {
        font-weight: 600;
        margin-right: 1rem;
    }
`

export const DeleteTechButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    padding: .25rem;

    outline: none;
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .input-holder {
        position: relative;
        width: 75%;
    }

    .input-label {
        color: var(--primary-darkblue)!important;
    }

    .textfield-shortcut-reference {
        position: absolute;
        right: 0.5rem;
        top: .5rem;
        bottom: .5rem;

        padding: .025rem .5rem;

        animation: pop-in .1s forwards ease-in;

        border: 1px solid var(--primary-darkblue);
        border-radius: 2.5px;

        color: var(--primary-darkblue);
    }

    .button-add-tech {
        background: var(--primary-darkblue);
        color: #fff;

        width: 20%;

        animation: pop-in .1s forwards ease-in;

        &:hover {
            background: var(--primary-darkblue);
            color: #fff;
        }
    }

    @media (min-width: 600px) {}
    @media (min-width: 900px) {
        flex-direction: row;
    }
    @media (min-width: 1200px) {}
    @media (min-width: 1800px) {}

    @keyframes pop-in {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
`