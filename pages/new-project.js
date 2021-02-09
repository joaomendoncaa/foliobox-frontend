import { useMediaQuery } from 'react-responsive'
import { FormEvent, useState, ChangeEvent } from 'react'
import { Router, useRouter } from 'next/router'
import Head from 'next/head'

import TopHeader from '../components/TopHeader'
import NewProjectHeader from '../components/NewProjectHeader'
import MobileNewProjectHeader from '../components/MobileNewProjectHeader'
import Footer from '../components/Footer'
import PreviewProjectCard from '../components/PreviewProjectCard'

import api from "../services/api"

import { Container, Main, CreateProjectForm } from '../styles/NewProject'

export default function NewProject() {
    const router = useRouter()
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
    const [name, setName] = useState('')
    const [date, setDate] = useState('01/2021')
    const [details, setDetails] = useState('Lorem ipsum la la la')
    const [techUsed, setTechUsed] = useState(
        //     [
        //     'javascript',
        //     'react',
        //     'wordpress',
        //     'SQL',
        //     'HTML5',
        //     'CSS'
        // ]
    )
    const [images, setImages] = useState([])
    const [previewImages, setPreviewImages] = useState([])


    async function handleSubmit(event) {
        event.preventDefault()

        //await api.post('projects', data)

        alert('Project added to the list!')

        router.push('/')
    }

    return (
        <Container>
            <Head>
                <title>Foliobox | New Project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <TopHeader />
            {isMobile ? <MobileNewProjectHeader /> : <NewProjectHeader />}
            <Main>
                <PreviewProjectCard
                    nameState={name}
                    dateState={date}
                    detailsState={details}
                    techUsedState={techUsed}
                    previewImagesState={previewImages} />

                <CreateProjectForm onSubmit={handleSubmit}>

                </CreateProjectForm>
            </Main>
            <Footer />
        </Container>
    )
}