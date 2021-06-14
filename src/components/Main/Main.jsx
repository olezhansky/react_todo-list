import {Switch, Route } from 'react-router-dom'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import NoTodos from '../../assets/NoTodos/NoTodos'
import Basket from '../Basket/Basket'
import { useSelector } from 'react-redux'

const Main = () => {
    const todos = useSelector(state => state.todos)
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