import { useEffect, useState, useContext } from 'react'
import { fetchReadme } from '@varandas/fetch-readme'
import ReactMarkdown from 'react-markdown'

import { Container, ReadmeTitle } from './styles'
import ProfileStyleContext from '../../context/ProfileStyleContext'

export default function ProfileAbout() {
    const theme = useContext(ProfileStyleContext)
    const [readmeData, setReadmeData] = useState(null)

    useEffect(async () => {
        fetchReadme({
            username: 'joaomendoncaa',
            repository: 'joaomendoncaa',
            readme: 'README.md'
        }).then(readme => setReadmeData(readme)).catch(err => console.error(err))
    }, [])

    return (
        <Container theme={theme}>
            <ReadmeTitle>
                <span id="username">joaomendoncaa / </span>
                <span id="readme">README.md</span>
            </ReadmeTitle>
            {readmeData ? (
                <ReactMarkdown className='react-markdown'>
                    {readmeData}
                </ReactMarkdown>
            ) : <h1>Loading README.md...</h1>}

        </Container>
    )
} 