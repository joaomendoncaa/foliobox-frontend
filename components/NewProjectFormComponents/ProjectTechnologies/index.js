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

export default function ProjectName({ ...props }) {
    const { formData, updateData } = useContext(NewProjectFormContext)
    const [field, meta] = useField('techList')

    return (
        <Container>
            <Title>Project Technologies</Title>
            <Description>Give an original name to your project</Description>
            <TextField
                variant='outlined'
                label='project name here...'
                type="text"
                className="name-input"
                inputProps={{ maxLength: 15 }}
                name="name"
                {...field}
                {...props}
                error={meta.touched && meta.error ? true : false}
                helperText={meta.touched && meta.error ? meta.error : null}
                value={formData.name.toString().toUpperCase()}
                onChange={updateData} />

        </Container>
    )
}