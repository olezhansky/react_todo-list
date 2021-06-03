import { ADD_TODO, CHANGE_TODO, REMOVE_TODO, TODOS_FROM_LOCAL_STORAGE } from "./typeActions"

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

export const todosFromLocalStorageAction = todosFromLocalStorage => {
    return {
      type: TODOS_FROM_LOCAL_STORAGE,
      payload: JSON.parse(todosFromLocalStorage),
    };
  };
