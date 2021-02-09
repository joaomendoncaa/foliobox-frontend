import { Container } from './styles'

export default function ShimmeringBlock({ width, height, borderRadius }) {
    return (
        <Container style={{
            width,
            height,
            borderRadius: borderRadius ? borderRadius : null
        }} />
    )
}