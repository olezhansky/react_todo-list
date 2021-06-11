import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../store/actions'
import styles from './AddTodo.module.css'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const AddTodo = () => {
    const [title, setValue] = useState('')
    const dispatch = useDispatch()
    const onSubmit = (event) => {
        event.preventDefault()
        if (title.trim()) {
            dispatch(addTodoAction(title))
            setValue('')
        }
    }
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
    }));
    const classes = useStyles();

    return (
      <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField 
            id="outlined-basic" label="Input todo" variant="outlined" 
            value={title}
            onChange={event => setValue(event.target.value)}
            type="text"
        />
        <button className={styles.Button}>Add todo</button>
      </form>
    );  
}

export default AddTodo