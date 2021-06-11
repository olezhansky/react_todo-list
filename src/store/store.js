import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from './rootReducer'
import thunk from 'redux-thunk'
import { ADD_TODO, CHANGE_TODO, CLEAR_ALL_BASKET_TODO, REMOVE_TODO, TODOS_CHANGE_ORDER } from './typeActions';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;


const localStorageMiddleware = ({ getState }) => next => action => {
    const result = next(action);
    if (action.type === ADD_TODO || action.type === REMOVE_TODO || action.type === CHANGE_TODO || action.type === TODOS_CHANGE_ORDER) {
        const { todos } = getState();
        localStorage.setItem("todos", JSON.stringify(todos));
    }
    if (action.type === ADD_TODO || action.type === REMOVE_TODO || action.type === CHANGE_TODO || action.type === TODOS_CHANGE_ORDER || action.type === CLEAR_ALL_BASKET_TODO) {
        const { basketTodos } = getState();
        localStorage.setItem("basketTodos", JSON.stringify(basketTodos));
    }
    return result;
};

const store = createStore( 
    rootReducer,
    compose(applyMiddleware(thunk, localStorageMiddleware), devTools)
)

export default store