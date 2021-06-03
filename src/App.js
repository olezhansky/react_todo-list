import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import { todosFromLocalStorageAction } from './store/actions'
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

  return (
      <div className="wrapper">
        <h1>Todo list</h1>
        <AddTodo />
        { 
          todos.length !== 0 ?
          <TodoList /> :
          <NoTodos />
        }
      </div>
  )
}

export default App
