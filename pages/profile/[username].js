import { useMediaQuery } from 'react-responsive'
import { useEffect, useState } from 'react'
import Head from 'next/head'

import ProfileStyleContext from '../../context/ProfileStyleContext'

import TopHeader from '../../components/TopHeader'
import ProfileHeader from '../../components/ProfileHeader'
import MobileProfileHeader from '../../components/MobileProfileHeader'
import Footer from '../../components/Footer'
import ProfileAbout from '../../components/ProfileAbout'
import ProfileProjects from '../../components/ProfileProjects'
import ProfileComments from '../../components/ProfileComments'

import { Container, Main } from '../../styles/Profile'
import themes from '../../styles/ProfileThemes/themes'

export default function Profile({ profile, theme }) {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
    const [mainContent, setMainContent] = useState('about')

    const changeMainContent = (newContent) => {
        setMainContent(newContent)
    }

    return (
        <ProfileStyleContext.Provider value={themes[theme]}>
            <Container>
                <Head>
                    <title>Foliobox | Profile</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <TopHeader />
                {isMobile ? <MobileProfileHeader githubUserData={profile} changeMainContent={changeMainContent} /> : <ProfileHeader githubUserData={profile} changeMainContent={changeMainContent} />}
                <Main>
                    {mainContent === 'about' && <ProfileAbout />}
                    {mainContent === 'projects' && <ProfileProjects />}
                    {mainContent === 'comments' && <ProfileComments />}
                </Main>
                <Footer />
            </Container>
        </ProfileStyleContext.Provider>
    )
}

export const getServerSideProps = async ({ params }) => {
    const { username } = params
    const theme = 'retro'

    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    return {
        props: {
            profile: data,
            theme: theme
        }
    }
}