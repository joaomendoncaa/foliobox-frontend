//Package imports
import { useContext, useEffect } from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

//Context imports
import NewProjectFormContext from '../../../context/NewProjectFormContext'

//Style imports
import {
    Container,
    Title,
    Description
} from './styles'

export default function ProjectRepository(props) {
    const { updateFormPreviewData } = useContext(NewProjectFormContext)
    const [field, meta] = useField('repository')

    const { error, helperText, form, setFieldValue, ...rest } = props

    return (
        <Container>
            <Title>Project Repository</Title>
            <Description>Choose the repository that you have this project on</Description>

        </Container>
    )
}