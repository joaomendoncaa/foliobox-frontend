//Package imports
import { useContext } from 'react'
import { TextField } from '@material-ui/core'

//Context imports
import NewProjectFormContext from '../../../context/NewProjectFormContext'

//Style imports
import {
    Container,
    Title,
    Description
} from './styles'

export default function ProjectName() {
    const { formData, updateData } = useContext(NewProjectFormContext)

    return (
        <Container>
            <Title>Project Date</Title>
            <Description>Give an original name to your project</Description>
            <TextField
                variant='outlined'
                label='project name here...'
                type="text"
                className="name-input"
                maxLength="5"
                name="name"
                value={formData.name.toString().toUpperCase()}
                size="small"
                onChange={updateData} />
        </Container>
    )
}