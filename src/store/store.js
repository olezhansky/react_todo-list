import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk'
import { CLEAR_ALL_BASKET_TODO, ATT_TODO_TO_BASKET } from './basketTodos/types';
import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TODOS_CHANGE_ORDER } from './todos/types';
import {todosReducer} from './todos/reducer'
import {basketTodosReducer} from './basketTodos/reducer'


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;


const localStorageMiddleware = ({ getState }) => next => action => {
    const result = next(action);
    if (action.type === ADD_TODO || action.type === REMOVE_TODO || action.type === CHANGE_TODO || action.type === TODOS_CHANGE_ORDER) {
        const { todos } = getState();
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    if (action.type === CLEAR_ALL_BASKET_TODO || action.type === ATT_TODO_TO_BASKET) {
        const { basketTodos } = getState();
        localStorage.setItem("basketTodos", JSON.stringify(basketTodos));
    }
    return result;
};

export const rootReducer = combineReducers({
    todos: todosReducer,
    basketTodos: basketTodosReducer
})

const store = createStore( 
    rootReducer,
    {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        basketTodos: JSON.parse(localStorage.getItem('basketTodos')) || []
    },
    compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
)

export default store