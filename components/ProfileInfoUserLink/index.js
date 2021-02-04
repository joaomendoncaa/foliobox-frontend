import Image from 'next/image'

import {
    Container,
    IconWrapper,
    InfoSpan
} from './styles'

export default function ProfileInfoUserLink({ children, text }) {
    return (
        <Container>
            <IconWrapper>
                {children}
            </IconWrapper>
            <InfoSpan>
                {text}
            </InfoSpan>
        </Container>
    )
}