import { useEffect, useState } from 'react'
import { fetchReadme } from '@varandas/fetch-readme'
import ReactMarkdown from 'react-markdown'

import { Container, ReadmeTitle } from './styles'

export default function ProfileAbout() {
    const [readmeData, setReadmeData] = useState(null)

    useEffect(async () => {
        fetchReadme({
            username: 'joaomendoncaa',
            repository: 'joaomendoncaa',
            readme: 'README.md'
        }).then(readme => setReadmeData(readme)).catch(err => console.error(err))
    }, [])

    return (
        <Container>
            <ReadmeTitle>
                <span id="username">joaomendoncaa / </span>
                <span id="readme">README.md</span>
            </ReadmeTitle>
            <ReactMarkdown className='react-markdown'>
                {readmeData}
            </ReactMarkdown>
        </Container>
    )
} 