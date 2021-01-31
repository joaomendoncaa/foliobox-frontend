import Image from 'next/image'

import { Container, BuiltWithWrapper } from './styles'

export default function Footer() {

    return (
        <Container>
            <span className="copyright-span">© 2021 foliohub</span>
            <BuiltWithWrapper>
                <span>Built with</span>
                <Image width="20" height="20" layout="fixed" alt="Heart Icon" src="/icon-heart-grey.svg" />
                <span>
                    by
                    <a target="_blank" href="https://twitter.com/joaomendoncaaaa">João Mendonça</a>
                </span>
            </BuiltWithWrapper>

            <hr className="footer-separator" />
        </Container>
    )
}