import { useState, useEffect, useRef } from 'react'

import ProfileNavigation from '../ProfileNavigation'
import ProfileInfo from '../ProfileInfo'

import { NavWrapper, Placeholder } from './styles'

export default function MobileProfileHeader({ githubUserData, changeMainContent }) {
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
        <>
            <ProfileInfo userData={userInfo} />
            <NavWrapper fixed={fixedPosition} ref={navigation}>
                <ProfileNavigation changeMainContent={changeMainContent} />
            </NavWrapper>
            {fixedPosition && <Placeholder height={navigation.current.getBoundingClientRect().height} />}
        </>
    )
}