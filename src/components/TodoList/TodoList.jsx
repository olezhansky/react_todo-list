import React, { useState } from 'react'
import styles from './TodoList.module.css'
import TodoItem from './TodoItem/TodoItem'
import { useDispatch } from 'react-redux'
import { todosChangeOrderAction } from '../../store/actions'

const TodoList = ({todos}) => {

    const [currentTodo, setCurrentTodo] = useState(null)
    const dispatch = useDispatch()

    const dragStartHandler = (e, todo) => {
        setCurrentTodo(todo)
    }
    const dragEndHandler = (e) => {
        e.target.style.background = 'white'
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style.background = 'grey'
    }
    const dropHandler = (e, todo) => {
        e.preventDefault()
        dispatch(todosChangeOrderAction(todo, currentTodo))
        e.target.style.background = 'white'
    }
    const sortTodos = (a, b) => {
        if (a.order > b.order) {
          return 1
        }
        return -1
    }
   
    return (
        <div className={styles.TodoList}>
            <p className={styles.TodoListTitle}>
                {todos.length}
                &nbsp;
                todo in list
            </p>
            <ul className={styles.TodoListItems}>
                {todos.sort(sortTodos).map((todo, index) => {
                    return (
                        <TodoItem
                            dragStart={dragStartHandler}
                            dragEnd={dragEndHandler}
                            dragOver={dragOverHandler}
                            drop={dropHandler}
                            index={index}
                            key={todo.id}
                            todo={todo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList