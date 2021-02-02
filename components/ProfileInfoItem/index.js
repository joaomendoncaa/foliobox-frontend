import Image from 'next/image'

import {
    Container,
    IconWrapper,
    InfoSpans
} from './styles'

export default function ProfileInfoItem({ icon, info }) {
    return (
        <Container>
            <IconWrapper>
                <Image
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    alt='Info Icon'
                    src={`${icon}`}
                />
            </IconWrapper>
            <InfoSpan>
                {info}
            </InfoSpan>
        </Container>
    )
}