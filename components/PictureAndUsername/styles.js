import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    position: absolute;
    left: var(--horizontal-padding);
    top: 0;
    bottom: 0;

    opacity: 0;

    animation: fade-in .2s forwards ease-in;

    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    span {
        font-weight: bold;
        padding-left: .75rem;
        font-size: .8rem;
    }
`

export const ProfileImageWrapper = styled.div`
    width: 30px;
    height: 30px;

    position: relative;

    display: flex;
    justify-content: center;

    div {
        border-radius: 99vw;
    }
`
