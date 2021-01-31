import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'

import TopHeader from '../components/TopHeader'
import ProfileHeader from '../components/ProfileHeader'
import MobileProfileHeader from '../components/MobileProfileHeader'

import {
    Container
} from '../styles/Profile'

export default function Profile() {
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })

    return (
        <div>
            <Head>
                <title>Foliobox | Profile</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />
            {isMobile ? <MobileProfileHeader /> : <ProfileHeader />}
            <Container>
                <h1>Profile Page</h1>
            </Container>
        </div >
    )
}