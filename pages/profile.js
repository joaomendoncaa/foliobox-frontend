import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'

import TopHeader from '../components/TopHeader'
import ProfileHeader from '../components/ProfileHeader'
import MobileProfileHeader from '../components/MobileProfileHeader'
import Footer from '../components/Footer'

import {
    Container
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
            <Container>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere obcaecati tempore earum amet doloribus fugiat quam, voluptates minus nam dolores omnis quia,
                    adipisci sapiente soluta iste, ut modi id!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque labore facilis accusantium ipsam aspernatur maxime sunt porro,
                    aperiam sint dolor natus repudiandae quo praesentium ipsa nemo illum, quidem minima harum.
                </p>
            </Container>
            <Footer />
        </>
    )
}