//Package imports
import { useRef, useState, useEffect } from 'react'

//Component imports
import VerticalSpacer from '../VerticalSpacer'

//Style imports
import {
    Container,
    Content,
    Title,
    LivePreviewWrapper,
    NewProjectWrapper,
    Placeholder
} from './styles'

export default function NewProjectHeader() {
    const headerContent = useRef()
    const [fixedPosition, setFixedPosition] = useState(false)

    useEffect(() => {
        const initialTop = headerContent.current.getBoundingClientRect().top
        const handleScroll = () => {
            setFixedPosition((window.scrollY + 86) > initialTop)
        }
        window.addEventListener('scroll', handleScroll)

        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    return (
        <Container>
            <VerticalSpacer height={5} />
            <Content ref={headerContent} fixed={fixedPosition}>
                <LivePreviewWrapper>
                    <Title>Live Preview</Title>
                </LivePreviewWrapper>
                <NewProjectWrapper>
                    <Title>Project Specifications</Title>
                </NewProjectWrapper>
            </Content>
            {fixedPosition && <Placeholder height={headerContent.current.getBoundingClientRect().height} />}
        </Container>
    )
}