import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TODOS_CHANGE_ORDER } from "./types"

export const addTodoAction = (title) => {
    return {
        type: ADD_TODO, 
        payload: {title}
    } 
}

export const removeTodoAction = (todoId) => {
    return {
        type: REMOVE_TODO, 
        payload: todoId
    }
}

export const onChangeTodoAction = (todoId) => {
    return {
        type: CHANGE_TODO, 
        payload: todoId
    }
}

export const todosChangeOrderAction = (todo, currentTodo) => {
    return {
        type: TODOS_CHANGE_ORDER,
        payload: {todo, currentTodo}
    };
};
