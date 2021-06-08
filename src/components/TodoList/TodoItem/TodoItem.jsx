// import { Checkbox } from '@material-ui/core'
// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { onChangeTodoAction, removeTodoAction } from '../../../store/actions'
// import styles from './TodoItem.module.css'
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

// const TodoItem = ({todo, index}) => {
//     const dispatch = useDispatch()
    
//     const handleRemoveTodo = () => dispatch(removeTodoAction(todo.id))
    
//     const handleOnChangeTodo = () => dispatch(onChangeTodoAction(todo.id))

//     const [currentTodo, setCurrentTodo] = useState(null)

//     const styleArr = []
    
//     if (todo.completed) {
//         styleArr.push('done')
//     }


//     const dragStartHandler = (e, todo) => {
//         console.log(todo);
//         setCurrentTodo(todo)
//     }
//     const dragEndHandler = (e) => {
//         e.target.style.background = 'white'
//     }
//     const dragOverHandler = (e) => {
//         e.preventDefault()
//         e.target.style.background = 'grey'
//     }
//     const dropHandler = (e, todo) => {
//         e.preventDefault()
//     }

//     return (
//         <li 
//             onDragStart={e => dragStartHandler(e, todo)}
//             onDragLeave={e => dragEndHandler(e)}
//             onDragEnd={e => dragEndHandler(e)}
//             onDragOver={e => dragOverHandler(e)}
//             onDrop={e => dropHandler(e, todo)}
//             draggable={true}
//             className={styles.TodoItem} 
//         >
//             <span className={styleArr.join(' ')}>
//                  <Checkbox
//                     value="checkedA"
//                     inputProps={{ 'aria-label': 'Checkbox A' }}
//                     checked={todo.completed}
//                     type="checkbox"
//                     onChange={handleOnChangeTodo}
//                  />
//                 &nbsp;
//                 <strong>{index + 1}</strong>
//                 &nbsp;
//                 {todo.title}
//             </span>
//             <IconButton aria-label="delete" onClick={handleRemoveTodo}>
//                 <DeleteIcon  />
//             </IconButton>
//         </li>
//     )
// }

// export default TodoItem

import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { onChangeTodoAction, removeTodoAction, todosChangeOrderAction } from '../../../store/actions'
import styles from './TodoItem.module.css'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = ({todo, index, dragStart, dragEnd, dragOver, drop}) => {
    const dispatch = useDispatch()
    
    const handleRemoveTodo = () => dispatch(removeTodoAction(todo.id))
    
    const handleOnChangeTodo = () => dispatch(onChangeTodoAction(todo.id))

    const styleArr = []
    
    if (todo.completed) {
        styleArr.push('done')
    }

    return (
        <li 
            onDragStart={e => dragStart(e, todo)}
            onDragLeave={e => dragEnd(e)}
            onDragEnd={e => dragEnd(e)}
            onDragOver={e => dragOver(e)}
            onDrop={e => drop(e, todo)}
            draggable={true}
            className={styles.TodoItem} 
        >
            <span className={styleArr.join(' ')}>
                 <Checkbox
                    value="checkedA"
                    inputProps={{ 'aria-label': 'Checkbox A' }}
                    checked={todo.completed}
                    type="checkbox"
                    onChange={handleOnChangeTodo}
                 />
                &nbsp;
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <IconButton aria-label="delete" onClick={handleRemoveTodo}>
                <DeleteIcon  />
            </IconButton>
        </li>
    )
}

export default TodoItem