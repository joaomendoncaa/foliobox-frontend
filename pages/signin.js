import Head from 'next/head'
import Image from 'next/image'

import TopHeader from "../components/TopHeader"

import { Container, IllustrationWrapper, IconButton } from '../styles/SignIn'

export default function SignIn() {
    return (
        <Container>
            <Head>
                <title>Foliobox | Sign in</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />
            <IllustrationWrapper>
                <Image
                    width="200"
                    height="200"
                    layout="responsive"
                    quality="95"
                    alt="Illustration of a profile mockup"
                    src="/signin-illustration.png"
                    priority />
            </IllustrationWrapper>
            <h1>Welcome to foliobox!</h1>
            <hr className="separator" />
            <p>
                To give you the best portfolio creation and managing experience we require you to have a github account,
                it’s free, full of cool features and makes everything easier!
            </p>

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
            <a className="create-github-account">create a github account</a>
        </Container>
    )
}