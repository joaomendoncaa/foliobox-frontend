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

export default function ProjectMedia(props) {
    const { updateData } = useContext(NewProjectFormContext)
    const [field, meta] = useField('images')

    const { error, helperText, form, setFieldValue, ...rest } = props

    return (
        <Container>
            <Title>Project Media</Title>
            <Description>Add some media to represent your project, you can either screenshot some screens or make your own media</Description>
            <input
                accept="image/*"
                className='file-input'
                id="contained-button-file"
                multiple
                type="file"
            />
        </Container>
    )
}