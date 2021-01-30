import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Container, LinkButton } from './styles'

export default function TopHeader() {
    const router = useRouter()
    const [isSignIn, setIsSignIn] = useState(false)

    useEffect(() => {
        checkCurrentRouterPath()
    }, [])

    const checkCurrentRouterPath = () => {
        const isPathSignIn = (router.pathname === '/signin')

        if (isPathSignIn)
            setIsSignIn(true)
        else
            setIsSignIn(false)
    }

    return (
        <Container>
            <Link href="/">
                <a>
                    <Image
                        width="98"
                        height="18"
                        priority="true"
                        layout="fixed"
                        alt="Foliobox Logo"
                        src="/foliobox.svg" />
                </a>
            </Link>

            {!isSignIn &&
                <Link href="/signin">
                    <LinkButton>sign in</LinkButton>
                </Link>
            }
        </Container>
    )
}