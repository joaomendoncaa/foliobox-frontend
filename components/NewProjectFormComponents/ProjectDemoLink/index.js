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

export default function ProjectDemoLink(props) {
    const { updateFormPreviewData } = useContext(NewProjectFormContext)
    const [field, meta] = useField('demoLink')

    const { error, helperText, form, setFieldValue, ...rest } = props

    return (
        <Container>
            <Title>Project Live Demo</Title>
            <Description>Give us a link to your project</Description>
            <TextField
                {...rest}
                variant='outlined'
                label="Url"
                placeholder='www.myproject.com'
                type="text"
                className="url-input"
                inputProps={{ maxLength: 40, name: field.name, value: field.value }}
                error={(meta.touched && meta.error) ? true : false}
                helperText={(meta.touched && meta.error) ? meta.error : null}
                onChange={event => {
                    setFieldValue(field.name, event.target.value.trim())
                    updateFormPreviewData('demoLink', event.target.value)
                }} />
        </Container>
    )
}