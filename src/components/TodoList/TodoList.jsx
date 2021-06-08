// import React from 'react'
// import styles from './TodoList.module.css'
// import TodoItem from './TodoItem/TodoItem'
// import { useSelector } from 'react-redux'

// const TodoList = () => {
//     const todos = useSelector(state => state.todos)

//     return (
//         <div className={styles.TodoList}>
//             <p className={styles.TodoListTitle}>

//                 {todos.length}
//                 &nbsp;
//                 todo in list
//             </p>
//             <ul className={styles.TodoListItems}>
//                 {todos.map((todo, index) => {
//                     return (
//                         <TodoItem 
//                             index={index}
//                             key={todo.id}
//                             todo={todo}
//                         />
//                     )
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default TodoList

import React, { useState } from 'react'
import styles from './TodoList.module.css'
import TodoItem from './TodoItem/TodoItem'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = ({dragStart, dragEnd, dragOver, drop}) => {
    const todos = useSelector(state => state.todos)

    const sortCards = (a, b) => {
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
                {todos.sort(sortCards).map((todo, index) => {
                    return (
                        <TodoItem
                            dragStart={dragStart}
                            dragEnd={dragEnd}
                            dragOver={dragOver}
                            drop={drop}
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