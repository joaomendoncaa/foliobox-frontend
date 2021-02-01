import Image from 'next/image'
import { StickyContainer, Sticky } from 'react-sticky'

import { Container } from './styles'

export default function MobileProfileHeader() {
    return (
        <Container>
            <StickyContainer>
                <Sticky topOffset={10}>
                    {({
                        style,
                        isSticky
                    }) => (<h1 style={style}>MobileProfileHeader</h1>)}
                </Sticky>
            </StickyContainer>
        </Container>
    )
}