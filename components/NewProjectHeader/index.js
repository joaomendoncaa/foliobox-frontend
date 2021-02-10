//Package imports
import { useRef, useState, useEffect } from 'react'

//Component imports
import VerticalSpacer from '../VerticalSpacer'

//Style imports
import {
    Container,
    Title,
    LivePreviewWrapper,
    NewProjectWrapper,
    Placeholder
} from './styles'

export default function NewProjectHeader() {
    const header = useRef()
    const [fixedPosition, setFixedPosition] = useState(false)

    useEffect(() => {
        const initialTop = header.current.getBoundingClientRect().top
        const handleScroll = () => {
            setFixedPosition((window.scrollY + 86) > initialTop)
        }
        window.addEventListener('scroll', handleScroll)

        return () => { window.removeEventListener('scroll', handleScroll) }
    }, [])

    return (
        <Container ref={header} fixed={fixedPosition}>
            <LivePreviewWrapper>
                <Title>Live Preview</Title>
            </LivePreviewWrapper>
            <NewProjectWrapper>
                <Title>Project Specifications</Title>
            </NewProjectWrapper>
            {fixedPosition && <Placeholder height={header.current.getBoundingClientRect().height} />}
        </Container>
    )
}