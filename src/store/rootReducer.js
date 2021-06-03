import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TODOS_FROM_LOCAL_STORAGE } from "./typeActions"

const initialState = {
    todos: []
}

export const rootReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case REMOVE_TODO:
            const newTodos = state.todos.filter(todo => todo.id !== action.payload)
            return {
                todos: newTodos
            }
        case ADD_TODO:
            const newTodo = {title: action.payload.title, id: Date.now(), completed: false}
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
        case TODOS_FROM_LOCAL_STORAGE:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state
    }
}