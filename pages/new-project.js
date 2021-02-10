//Package imports
import { useMediaQuery } from 'react-responsive'
import { FormEvent, useState, ChangeEvent } from 'react'
import { Router, useRouter } from 'next/router'
import Head from 'next/head'

//Components imports
import TopHeader from '../components/TopHeader'
import NewProjectHeader from '../components/NewProjectHeader'
import MobileNewProjectHeader from '../components/MobileNewProjectHeader'
import Footer from '../components/Footer'
import VerticalSpacer from '../components/VerticalSpacer'
import PreviewProjectCard from '../components/PreviewProjectCard'
import ProjectName from '../components/NewProjectFormComponents/ProjectName'
import ProjectDate from '../components/NewProjectFormComponents/ProjectDate'
import ProjectDetails from '../components/NewProjectFormComponents/ProjectDetails'
import ProjectMedia from '../components/NewProjectFormComponents/ProjectMedia'
import ProjectTechnologies from '../components/NewProjectFormComponents/ProjectTechnologies'
import ProjectRepository from '../components/NewProjectFormComponents/ProjectRepository'
import ProjectDemoLink from '../components/NewProjectFormComponents/ProjectDemoLink'

//Context imports
import NewProjectFormContext from '../context/NewProjectFormContext'

//Styles imports
import {
    Container,
    Main,
    CreateProjectForm
} from '../styles/NewProject'

export default function NewProject() {
    const router = useRouter()
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        details: '',
        techList: [],
        repository: '',
        demoLink: '',
        images: [],
        previewImages: []
    })

    const updateData = (event) => {
        const { name, value } = event.target
        setFormData(prevData => ({
            ...prevData,
            [name]: (name === 'name') ? value.toUpperCase() : value
        }))
    }

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
                <NewProjectFormContext.Provider value={{ formData, updateData }}>
                    <PreviewProjectCard
                        projectName={formData.name}
                        projectDate={formData.date}
                        projectDescription={formData.details}
                        projectTechList={formData.techList}
                        projectRepository={formData.repository}
                        projectLink={formData.demoLink}
                        projectPreviewImages={formData.previewImages} />

                    <CreateProjectForm onSubmit={handleSubmit}>

                        <ProjectName />
                        <ProjectDate />
                        <ProjectName />
                        <ProjectDate />
                        <ProjectName />
                        <ProjectDate />
                        <ProjectName />
                        <ProjectDate />
                        <ProjectName />
                        <ProjectDate />
                        <ProjectName />
                        <ProjectDate />

                    </CreateProjectForm>
                </NewProjectFormContext.Provider>
            </Main>
            <Footer />
        </Container>
    )
}