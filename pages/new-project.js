//Package imports
import { useMediaQuery } from 'react-responsive'
import { FormEvent, useState, ChangeEvent } from 'react'
import { Router, useRouter } from 'next/router'
import Head from 'next/head'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'

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
    Main
} from '../styles/NewProject'

export default function NewProject() {
    const router = useRouter()
    const isMobile = useMediaQuery({ query: '(max-width: 900px)' })
    const [formData, setFormData] = useState({
        name: '',
        month: '01',
        year: '2000',
        details: '',
        techList: [],
        repository: '',
        demoLink: '',
        images: [],
        previewImages: []
    })

    const updateData = (event) => {
        const { name, value } = event.target

        switch (name) {
            case 'name':
                setFormData(prevData => ({
                    ...prevData,
                    [name]: value.toUpperCase().trim()
                }))
                break
            case 'details':
                setFormData(prevData => ({
                    ...prevData,
                    [name]: value.trim()
                }))
                break
            default:
                setFormData(prevData => ({
                    ...prevData,
                    [name]: value
                }))
                break
        }
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

                    <Formik
                        initialValues={{
                            name: '',
                            month: null,
                            year: null,
                            details: '',
                            techList: [],
                            repository: '',
                            demoLink: '',
                            images: [],
                            previewImages: []
                        }}

                        validationSchema={Yup.object({
                            name: Yup.string()
                                .required('A project name is required'),
                            date: Yup.string()
                                .matches('/^\d{4}-\d{2}$/')
                                .required('A project date is required'),
                            details: Yup.string()
                                .min(15, 'Must be at least 15 characters')
                                .max(400, 'Must be 400 characters or less')
                                .required('Project details are required'),
                            techList: Yup.array()
                                .required('You must display the tech you used on the project'),
                            repository: Yup.string(),
                            demoLink: Yup.string(),
                            images: Yup.array()
                                .required('Missing some images for the project')
                        })}

                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 4))
                                resetForm()
                                setSubmitting(false)
                            }, 3000)
                        }}>
                        {props => (
                            <Form>
                                <ProjectName />
                                <ProjectDate />
                                <ProjectDetails />

                                <button type="submit">{props.isSubmitting ? 'Submitting...' : 'Submit'}</button>

                                <pre>{JSON.stringify(formData, null, 4)}</pre>
                            </Form>
                        )}
                    </Formik>
                </NewProjectFormContext.Provider>
            </Main>
            <Footer />
        </Container>
    )
}