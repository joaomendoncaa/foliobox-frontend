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


// TODO: make the component show the characters written vs the max characters
export default function ProjectDetails(props) {
    const { updateData } = useContext(NewProjectFormContext)
    const [field, meta] = useField('details')

    const { error, helperText, form, setFieldValue, ...rest } = props

    return (
        // TODO: Add resizable property
        <Container>
            <Title>Project Details</Title>
            <Description>Talk a little bit about the project and it’s concept</Description>
            <TextField
                {...rest}
                variant='outlined'
                multiline
                rows={6}
                label="Details"
                placeholder='This project is about...'
                inputProps={{ maxLength: 200, name: field.name, value: field.value }}
                error={(meta.touched && meta.error) ? true : false}
                helperText={(meta.touched && meta.error) ? meta.error : null}
                onChange={event => {
                    setFieldValue(field.name, event.target.value)
                    updateData(event)
                }} />
        </Container>
    )
}