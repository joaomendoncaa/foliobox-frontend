//Package imports
import { useContext, useState, useRef, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'
import { useField } from 'formik'

//Context imports
import NewProjectFormContext from '../../../context/NewProjectFormContext'

//Style imports
import {
    Container,
    Title,
    Description,
    TechnologiesWrapper,
    TechItem,
    DeleteTechButton,
    InputWrapper
} from './styles'

const useStyles = makeStyles((theme) => ({
    input: {
        minWidth: '100%'
    }
}))

export default function ProjectTechnologies(props) {
    const classes = useStyles()
    const { push, remove } = props.fieldArrayProps

    const { formData, updateFormPreviewData } = useContext(NewProjectFormContext)
    const [techListField, techListMeta] = useField('techList')
    const [newTech, setNewTech] = useState('')

    const addTech = () => {
        console.log('tech added')
        //filters techInput commas
        const techWithFilteredCommas = newTech.split(",").join("")
        push(techWithFilteredCommas)
        updateTechListPreview()
        console.log('tech added to the preview data', formData.techList)
        setNewTech('')
    }

    const updateTechListPreview = () => {
        updateFormPreviewData('techList', techListField.value)
    }

    return (
        <Container>
            <Title>Project Technologies</Title>
            <Description>List a max of 6 technologies you used on the project</Description>
            <TechnologiesWrapper>
                {techListField.value.map((tech, index) => (
                    <TechItem key={index}>
                        <span>{tech.toLowerCase()}</span>
                        <DeleteTechButton type="button" onClick={() => {
                            remove(index)
                            updateTechListPreview()
                        }}>
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 1.57135L9.42865 0L5.5 3.92865L1.57135 0L0 1.57135L3.92865 5.5L0 9.42865L1.57135 11L5.5 7.07135L9.42865 11L11 9.42865L7.07135 5.5L11 1.57135Z" fill="black" />
                            </svg>
                        </DeleteTechButton>
                    </TechItem>
                ))}
            </TechnologiesWrapper>
            {(techListField.value.length <= 5) && (
                <InputWrapper>
                    <div className='input-holder'>
                        <TextField
                            variant='outlined'
                            label='Technology'
                            placeholder='react, javascript, elixir, php'
                            type='text'
                            className={classes.input}
                            onKeyPress={(e) => {
                                //188 stands for comma keyCode
                                if (e.key === ',' && newTech.length >= 1) {
                                    addTech()
                                    setNewTech('')
                                }
                            }}
                            onChange={event => {
                                const { value } = event.target
                                const isValueComma = value === ','
                                if (!isValueComma) {
                                    setNewTech(event.target.value)
                                }
                            }}
                            inputProps={{
                                maxLength: 10
                            }}
                            InputLabelProps={{
                                className: 'input-label'
                            }}
                            size="small"
                            value={newTech} />
                        {(newTech.length >= 1) && (
                            <span className='textfield-shortcut-reference'>,</span>
                        )}
                    </div>
                    {(newTech.length >= 1) && (
                        <Button
                            type="submit"
                            variant="contained"
                            className='button-add-tech'
                            onClick={() => {
                                addTech()
                            }}>
                            ADD TECHNOLOGY
                        </Button>
                    )}
                </InputWrapper>
            )}
        </Container>
    )
}