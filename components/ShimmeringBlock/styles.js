import styled, { css } from 'styled-components'

export const Container = styled.div`
    background-image: linear-gradient(
        90deg,
        #FFF 0%,
        #E5E5E5 50%,
        #FFF 100%
    );
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
        from {
            background-position: 0% 0%;
        }
        to {
            background-position: -135% 0%;
        }
    }

    width: ${props => props.style.width};
    height: ${props => props.style.height};

    ${props => props.style.borderRadius && css`
        border-radius: ${props.style.borderRadius};
    `}
`