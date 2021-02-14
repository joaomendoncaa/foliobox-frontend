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

export default function ProjectName(props) {
    const { updateData } = useContext(NewProjectFormContext)
    const [field, meta] = useField('name')

    const { error, helperText, form, setFieldValue, ...rest } = props

    return (
        <Container>
            <Title>Project Name</Title>
            <Description>Write an original name to your project</Description>
            <TextField
                {...rest}
                variant='outlined'
                label='project name here...'
                type="text"
                className="name-input"
                inputProps={{ maxLength: 15, name: field.name, value: field.value }}
                error={(meta.touched && meta.error) ? true : false}
                helperText={(meta.touched && meta.error) ? meta.error : null}
                onChange={event => {
                    setFieldValue(field.name, event.target.value.toUpperCase())
                    updateData(event)
                }} />
        </Container>
    )
}