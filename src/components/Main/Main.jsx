import {Switch, Route } from 'react-router-dom'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import NoTodos from '../../assets/NoTodos/NoTodos'
import Basket from '../Basket/Basket'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { basketTodosFromLocalStorageAction } from '../../store/basketTodos/actions'
import { todosFromLocalStorageAction } from '../../store/todos/actions'

const Main = () => {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch()
  
    useEffect(() => {
      const todos = localStorage.getItem("todos");
      if (todos) {
        dispatch(todosFromLocalStorageAction(todos));
      }
    }, [dispatch]);
    useEffect(() => {
      const basketTodos = localStorage.getItem("basketTodos");
      if (basketTodos) {
        dispatch(basketTodosFromLocalStorageAction(basketTodos));
      }
    }, [dispatch]);

    return (
        <>
            <Switch>
                <Route path="/todolist">
                <AddTodo />
                    {todos.length !== 0 ?  
                    <TodoList todos={todos}/> :
                    <NoTodos />
                    }
                </Route>
                <Route path="/basket">
                    <Basket />
                </Route>
            </Switch>
        </>
    )
}

export default Main