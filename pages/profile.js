import { useMediaQuery } from 'react-responsive'
import { useRef, useEffect } from 'react'
import Head from 'next/head'


import TopHeader from '../components/TopHeader'
import ProfileHeader from '../components/ProfileHeader'
import MobileProfileHeader from '../components/MobileProfileHeader'
import Footer from '../components/Footer'

import {
    Main
} from '../styles/Profile'

export default function Profile() {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

    return (
        <>
            <Head>
                <title>Foliobox | Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />
            {isMobile ? <MobileProfileHeader /> : <ProfileHeader />}
            <Main>

            </Main>
            <Footer />
        </>
    )
}