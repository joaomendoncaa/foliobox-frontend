import Image from 'next/image'

import { Container, ProfileImageWrapper } from './styles'

export default function PictureAndUsername({ userslug, picture }) {
    return (
        <Container>
            <ProfileImageWrapper>
                <Image
                    layout="fill"
                    loading="eager"
                    objectFit="contain"
                    objectPosition="center"
                    quality="92"
                    alt="Profile Picture"
                    src={picture}
                    priority />
            </ProfileImageWrapper>
            <span>{userslug}</span>
        </Container>
    )
}