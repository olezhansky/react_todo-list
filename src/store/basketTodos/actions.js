import { BASKET_TODOS_FROM_LOCAL_STORAGE, CLEAR_ALL_BASKET_TODO, ATT_TODO_TO_BASKET } from "./types";

export const basketTodosFromLocalStorageAction = basketTodosFromLocalStorage => {
    return {
      type: BASKET_TODOS_FROM_LOCAL_STORAGE,
      payload: JSON.parse(basketTodosFromLocalStorage),
    };
  };
export const clearAllBasketTodoAction = () => {
    return {
      type: CLEAR_ALL_BASKET_TODO,
    };
  };
export const addTodoToBasketAction = (todo) => {
    return {
      type: ATT_TODO_TO_BASKET,
      payload: todo
    };
  };
