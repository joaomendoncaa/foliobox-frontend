import { useState, useEffect, useRef } from 'react'

import ProfileNavigation from '../ProfileNavigation'
import ProfileInfo from '../ProfileInfo'
import PictureAndUsername from '../PictureAndUsername'

import { Container, NavWrapper, Placeholder } from './styles'
import VerticalSpacer from '../VerticalSpacer'

export default function ProfileHeader({ githubUserData, changeMainContent }) {
    const navigation = useRef()
    const [fixedPosition, setFixedPosition] = useState(false)
    const [userInfo, setUserInfo] = useState({
        pictureUrl: githubUserData.avatar_url,
        username: githubUserData.name,
        userSlug: githubUserData.login,
        userDescription: githubUserData.bio,
        location: githubUserData.location,
        twitter: githubUserData.twitter_username,
        company: githubUserData.company,
        website: githubUserData.blog
    })

    useEffect(() => {
        const initialTop = navigation.current.getBoundingClientRect().top
        const handleScroll = () => {
            setFixedPosition((window.scrollY + 86) > initialTop)
        }
        window.addEventListener('scroll', handleScroll)

        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    return (
        <Container>
            <VerticalSpacer height={7.5} />
            {!fixedPosition && <ProfileInfo userData={userInfo} />}
            <NavWrapper fixed={fixedPosition} ref={navigation}>
                {fixedPosition && <PictureAndUsername userslug={userInfo.userSlug} picture={userInfo.pictureUrl} />}
                <ProfileNavigation changeMainContent={changeMainContent} />
            </NavWrapper>
            {fixedPosition && <Placeholder height={navigation.current.getBoundingClientRect().height} />}
        </Container>
    )
}