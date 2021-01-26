import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import TopHeader from '../components/TopHeader'

import { Container, LandingTitle, LandingSubtitle, LinkMakeMyFolio, BuiltWithWrapper } from '../styles/Home'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Foliobox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopHeader />

      <LandingTitle>Keep focused on what matters</LandingTitle>
      <LandingSubtitle>
        Build an awesome portfolio in minutes
        and focuse on what really matters, your projects!
      </LandingSubtitle>

      <Link href="/signin">
        <LinkMakeMyFolio>make my own folio</LinkMakeMyFolio>
      </Link>

      <BuiltWithWrapper>
        <span>Built with</span>
        <Image width="20" height="20" layout="responsive" alt="Heart Icon" src="/icon-heart.svg" />
        <span>
          span
          <a href="">João Mendonça</a>
        </span>
      </BuiltWithWrapper>

      <Image
        width="789"
        height="669"
        layout="responsive"
        quality="90"
        alt="Illustration of someone at a desk"
        src="/landing-illustration.png"
        priority="true" />
    </Container>
  )
}
