//Package imports
import { useContext } from 'react'
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

export default function ProjectDetails({ ...props }) {
    const { formData, updateData } = useContext(NewProjectFormContext)
    const [field, meta] = useField('details')

    return (
        <Container>
            <Title>Project Details</Title>
            <Description>Talk a little bit about the project and it’s concept</Description>
            <TextField
                variant='outlined'
                multiline
                name='details'
                rows={6}
                placeholder='project details here...'
                error={meta.touched && meta.error ? true : false}
                helperText={meta.touched && meta.error ? meta.error : null}
                defaultValue={formData.details}
                onChange={updateData} />
        </Container>
    )
}