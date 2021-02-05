import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import TopHeader from "../components/TopHeader"
import Footer from "../components/Footer"

import { Container, IllustrationWrapper, IconButton } from '../styles/SignIn'

export default function SignIn() {
    return (
        <div>
            <Head>
                <title>Foliobox | Sign in</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />
            <Container>
                <IllustrationWrapper>
                    <Image
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        quality="95"
                        alt="Illustration of a profile mockup"
                        src="/signin-illustration.png" />
                </IllustrationWrapper>
                <h1>Welcome to foliobox!</h1>
                <hr className="signin-separator" />
                <p>
                    To give you the best portfolio creation and managing experience we require you to have a github account,
                    it’s free, full of cool features and makes everything easier!
            </p>

                <Link href="/profile/joaomendoncaa">
                    <IconButton>
                        <Image
                            width="27"
                            height="25.29"
                            alt="Github Icon"
                            quality="100"
                            src="/github.svg"
                            className="icon-github" />
                        <span>Sign in with github</span>
                    </IconButton>
                </Link>
                <a className="create-github-account">create a github account</a>

                <Footer isPositionAbsolute />
            </Container>
        </div>
    )
}