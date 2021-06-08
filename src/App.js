import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { todosChangeOrderAction, todosFromLocalStorageAction } from './store/actions'
import NoTodos from './assets/NoTodos/NoTodos'

function App() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      dispatch(todosFromLocalStorageAction(todos));
    }
  }, [dispatch]);

  const [currentTodo, setCurrentTodo] = useState(null)

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

  return (
      <div className="wrapper">
        <h1>Todo list</h1>
        <AddTodo />
        { 
          todos.length !== 0 ?
          <TodoList  
            dragStart={dragStartHandler}
            dragEnd={dragEndHandler}
            dragOver={dragOverHandler}
            drop={dropHandler}
          /> :
          <NoTodos />
        }
      </div>
  )
}

export default App
