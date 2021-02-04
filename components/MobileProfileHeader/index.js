import { useState, useEffect, useRef } from 'react'

import ProfileNavigation from '../ProfileNavigation'
import ProfileInfo from '../ProfileInfo'
import PictureAndUsername from '../PictureAndUsername'

import { NavWrapper, Placeholder } from './styles'

export default function MobileProfileHeader() {
    const navigation = useRef()
    const [fixedPosition, setFixedPosition] = useState(false)
    const [userInfo, setUserInfo] = useState({
        pictureUrl: '/profile-image.png',
        username: 'João Mendonça',
        userSlug: 'joaomendoncaa',
        userDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, praesentium voluptas ipsa illum facilis at optio eveniet ab fugit aut beatae! Illum ipsam soluta neque velit autem asperiores optio perferendis?',
        location: 'Portugal',
        twitter: '@joaomendoncaaa',
        company: 'Digital Extremes',
        website: 'joaomendonca.dev'

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
                <ProfileNavigation />
            </NavWrapper>
            {fixedPosition && <Placeholder height={navigation.current.getBoundingClientRect().height} />}
        </>
    )
}