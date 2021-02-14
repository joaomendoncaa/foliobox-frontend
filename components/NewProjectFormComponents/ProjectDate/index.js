//Package imports
import { useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core'
import { useField } from 'formik'

//Context imports
import NewProjectFormContext from '../../../context/NewProjectFormContext'

//Style imports
import {
    Container,
    Title,
    Description,
    InputsWrapper
} from './styles'

const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '45%',
        minWidth: 120,
    }
}))

export default function ProjectDate(props) {
    const classes = useStyles()

    const { updateData } = useContext(NewProjectFormContext)
    const [monthField, monthMeta] = useField('month')
    const [yearField, yearMeta] = useField('year')

    const { error, helperText, form, setFieldValue, ...rest } = props

    return (
        <Container>
            <Title>Project Date</Title>
            <Description>Select an aproximate date of when the project was done</Description>
            <InputsWrapper>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="select-month-label">Month</InputLabel>
                    <Select
                        {...rest}
                        size="small"
                        name="month"
                        labelId="select-month-label"
                        label="Month"
                        inputProps={{
                            name: monthField.name,
                            value: monthField.value
                        }}
                        error={(monthMeta.touched && monthMeta.error) ? true : false}
                        helperText={(monthMeta.touched && monthMeta.error) ? monthMeta.error : null}
                        onChange={event => {
                            setFieldValue(monthField.name, event.target.value.toUpperCase())
                            updateData(event)
                        }}>
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='01'>January</MenuItem>
                        <MenuItem value='02'>February</MenuItem>
                        <MenuItem value='03'>March</MenuItem>
                        <MenuItem value='04'>April</MenuItem>
                        <MenuItem value='05'>May</MenuItem>
                        <MenuItem value='06'>June</MenuItem>
                        <MenuItem value='07'>July</MenuItem>
                        <MenuItem value='08'>August</MenuItem>
                        <MenuItem value='09'>September</MenuItem>
                        <MenuItem value='10'>October</MenuItem>
                        <MenuItem value='11'>November</MenuItem>
                        <MenuItem value='12'>December</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="select-year-label">Year</InputLabel>
                    <Select
                        {...rest}
                        variant="outlined"
                        size="small"
                        name="year"
                        labelId="select-year-label"
                        label="Year"
                        inputProps={{
                            name: yearField.name,
                            value: yearField.value
                        }}
                        error={(yearMeta.touched && yearMeta.error) ? true : false}
                        helperText={(yearMeta.touched && yearMeta.error) ? yearMeta.error : null}
                        onChange={event => {
                            setFieldValue(yearField.name, event.target.value.toUpperCase())
                            updateData(event)
                        }}>
                        <MenuItem value=''>
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value='1990'>1990</MenuItem>
                        <MenuItem value='1991'>1991</MenuItem>
                        <MenuItem value='1992'>1992</MenuItem>
                        <MenuItem value='1993'>1993</MenuItem>
                        <MenuItem value='1994'>1994</MenuItem>
                        <MenuItem value='1995'>1995</MenuItem>
                        <MenuItem value='1996'>1996</MenuItem>
                        <MenuItem value='1997'>1997</MenuItem>
                        <MenuItem value='1998'>1998</MenuItem>
                        <MenuItem value='1999'>1999</MenuItem>
                        <MenuItem value='2000'>2000</MenuItem>
                        <MenuItem value='2001'>2001</MenuItem>
                        <MenuItem value='2002'>2002</MenuItem>
                        <MenuItem value='2003'>2003</MenuItem>
                        <MenuItem value='2004'>2004</MenuItem>
                        <MenuItem value='2005'>2005</MenuItem>
                        <MenuItem value='2006'>2006</MenuItem>
                        <MenuItem value='2007'>2007</MenuItem>
                        <MenuItem value='2008'>2008</MenuItem>
                        <MenuItem value='2009'>2009</MenuItem>
                        <MenuItem value='2010'>2010</MenuItem>
                        <MenuItem value='2011'>2011</MenuItem>
                        <MenuItem value='2012'>2012</MenuItem>
                        <MenuItem value='2013'>2013</MenuItem>
                        <MenuItem value='2014'>2014</MenuItem>
                        <MenuItem value='2015'>2015</MenuItem>
                        <MenuItem value='2016'>2016</MenuItem>
                        <MenuItem value='2017'>2017</MenuItem>
                        <MenuItem value='2018'>2018</MenuItem>
                        <MenuItem value='2019'>2019</MenuItem>
                        <MenuItem value='2020'>2020</MenuItem>
                        <MenuItem value='2021'>2021</MenuItem>
                    </Select>
                </FormControl>
            </InputsWrapper>
        </Container>
    )
}