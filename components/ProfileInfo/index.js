import Image from 'next/image'

import ProfileInfoItem from '../ProfileInfoItem'

import { Container, ProfileImageWrapper, UsernameWrapper, UserDescription } from './styles'

export default function ProfileInfo({ picture, username, userSlug, userDescription, location, twitter, company, website }) {
    return (
        <Container>
            <ProfileImageWrapper>
                <Image
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    quality="90"
                    alt="Profile Picture"
                    src={picture} />
            </ProfileImageWrapper>
            <UsernameWrapper>
                <h1>{username}</h1>
                <span>{userSlug}</span>
            </UsernameWrapper>
            <UserDescription>
                {userDescription}
            </UserDescription>
            {location && <ProfileInfoItem icon={'/icon-location'} info={location} />}
            {twitter && <ProfileInfoItem icon={'/icon-twitter'} info={twitter} />}
            {company && <ProfileInfoItem icon={'/icon-company'} info={company} />}
            {website && <ProfileInfoItem icon={'/icon-website'} info={website} />}
        </Container>
    )
}