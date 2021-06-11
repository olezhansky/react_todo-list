import { ADD_TODO, BASKET_TODOS_FROM_LOCAL_STORAGE, CHANGE_TODO, CLEAR_ALL_BASKET_TODO, REMOVE_TODO, TODOS_CHANGE_ORDER, TODOS_FROM_LOCAL_STORAGE } from "./typeActions"

const initialState = {
    todos: [],
    basketTodos: []
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case REMOVE_TODO:
            const newTodos = state.todos.filter(todo => todo.id !== action.payload)
            const newBasketTodos = state.todos.filter(basketTodo => basketTodo.id === action.payload)
            return {
                todos: newTodos,
                basketTodos: [...state.basketTodos, ...newBasketTodos]
            }
        case ADD_TODO:
            const newTodo = {title: action.payload.title, id: Date.now(), completed: false, order: Date.now(), date: new Date().toLocaleString()}
            return {
                ...state,
                todos: [...state.todos, newTodo]
            }
        case CHANGE_TODO:
            const todoToggle = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                ...state,
                todos: todoToggle
            }
        case TODOS_CHANGE_ORDER:
            let orderedTodos = state.todos.map(t => {
                if (t.id === action.payload.todo.id) {
                  return {...t, order: action.payload.currentTodo.order}
                }
                if (t.id === action.payload.currentTodo.id) {
                  return {...t, order: action.payload.todo.order}
                }
                return t
              })
            return {
                ...state,
                todos: orderedTodos
            }
        case TODOS_FROM_LOCAL_STORAGE:
            return {
                ...state,
                todos: action.payload,
            };
        case BASKET_TODOS_FROM_LOCAL_STORAGE:
            return {
                ...state,
                basketTodos: action.payload,
            };
        case CLEAR_ALL_BASKET_TODO:
            return {
                ...state,
                basketTodos: [],
            };
        default:
            return state
    }
}