import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

import TopHeader from '../components/TopHeader'

import {
  Container,
  TextsWrapper,
  LinksWrapper,
  LinkMakeMyFolio,
  BuiltWithWrapper,
  IllustrationWrapper
} from '../styles/Home'

export default function Home() {
  const refTopHeader = useRef()

  return (
    <>
      <TopHeader ref={refTopHeader} />
      <Container height={(refTopHeader.current) ? refTopHeader.current.getBoundingClientRect().height : '86'}>
        <Head>
          <title>Foliobox</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TextsWrapper>
          <h1>Keep focused on what matters</h1>
          <p>
            Build an awesome portfolio in minutes
            and focuse on what really matters, your projects!
          </p>
        </TextsWrapper>

        <LinksWrapper>
          <Link href="/signin">
              <LinkMakeMyFolio>
                make my own folio
                
              </LinkMakeMyFolio>
            </Link>

            <BuiltWithWrapper>
              <span>Built with</span>
              <Image width="20" height="20" layout="fixed" alt="Heart Icon" src="/icon-heart-white.svg" />
              <span>
                by
                <a target="_blank" href="https://twitter.com/joaomendoncaaaa">João Mendonça</a>
              </span>
            </BuiltWithWrapper>
        </LinksWrapper>

        <IllustrationWrapper>
          <Image
            layout="fill"
            objectFit="contain"
            objectPosition="right bottom"
            quality="95"
            alt="Illustration of someone at a desk"
            src="/landing-illustration.png"
            priority />
        </IllustrationWrapper>

      </Container>
    </>
  )
}
