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

export default function ProjectName(props) {
    const classes = useStyles()
    const input = useRef()
    const { push, remove } = props.fieldArrayProps

    const { formData, updateData } = useContext(NewProjectFormContext)
    const [techListField, meta] = useField('techList')
    const [newTech, setNewTech] = useState('')
    const [isInputOnFocus, setisInputOnFocus] = useState(false)

    useEffect(() => {
        window.add
    })

    const addTech = () => {
        push(newTech)
        setNewTech('')
    }

    const addTechWithCommaShortcut = (event) => {
        const { keyCode } = event

        if (keyCode === 188) {
            const inputValue = event.target.value.split(",")[0]

            setNewTech(inputValue)
            addTech()
        }
    }

    return (
        <Container>
            <Title>Project Technologies</Title>
            <Description>List a max of 6 technologies you used on the project</Description>
            <TechnologiesWrapper>
                {techListField.value.map((tech, index) => (
                    <TechItem key={index}>
                        <span>{tech.toLowerCase()}</span>
                        <DeleteTechButton type="button" onClick={() => remove(index)}>
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
                            type="text"
                            className={classes.input}
                            inputProps={{
                                maxLength: 10
                            }}
                            onFocus={event => event.target.addEventListener('keydown', e => addTechWithCommaShortcut(e))}
                            onBlur={event => event.target.removeEventListener('keydown', addTechWithCommaShortcut)}
                            InputLabelProps={{
                                className: 'input-label'
                            }}
                            size="small"
                            value={newTech}
                            onChange={event => setNewTech(event.target.value)} />
                        {(newTech.length >= 1) && (
                            <span className='textfield-shortcut-reference'>,</span>
                        )}
                    </div>
                    {(newTech.length >= 1) && (
                        <Button
                            type="submit"
                            variant="contained"
                            className='button-add-tech'
                            onClick={() => addTech()}>
                            ADD TECHNOLOGY
                        </Button>
                    )}
                </InputWrapper>
            )}
        </Container>
    )
}