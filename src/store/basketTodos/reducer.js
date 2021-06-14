import { BASKET_TODOS_FROM_LOCAL_STORAGE, CLEAR_ALL_BASKET_TODO, ATT_TODO_TO_BASKET } from "./types";

const initialState = []

export const basketTodosReducer = (state = initialState, action) => {
    switch(action.type) {
        case BASKET_TODOS_FROM_LOCAL_STORAGE:
            return [...state, ...action.payload]
        case CLEAR_ALL_BASKET_TODO:
            return []
        case ATT_TODO_TO_BASKET:
            return [...state, action.payload]
        default:
            return state
    }
}