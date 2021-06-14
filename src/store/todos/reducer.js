import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TODOS_CHANGE_ORDER, TODOS_FROM_LOCAL_STORAGE } from "./types"

const initialState = []

export const todosReducer = (state = initialState, action) => {
    switch(action.type) {
        case REMOVE_TODO: 
            return state.filter(todo => todo.id !== action.payload)  
        case ADD_TODO:
            const newTodo = {title: action.payload.title, id: Date.now(), completed: false, order: Date.now(), date: new Date().toLocaleString()}
            return [...state, newTodo]
        case CHANGE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        case TODOS_CHANGE_ORDER:
            return state.map(t => {
                if (t.id === action.payload.todo.id) {
                  return {...t, order: action.payload.currentTodo.order}
                }
                if (t.id === action.payload.currentTodo.id) {
                  return {...t, order: action.payload.todo.order}
                }
                return t
              })
        case TODOS_FROM_LOCAL_STORAGE:
            return [...state, ...action.payload]
        default: 
            return state
    }
}