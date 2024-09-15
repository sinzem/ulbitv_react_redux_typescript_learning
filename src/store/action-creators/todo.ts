import {TodoAction, TodoActionTypes} from "../../types/todo";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchTodos = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => { /* (типизируем диспетчер встроенным типом, добавляем свой) */
        try {
            dispatch({type: TodoActionTypes.FETCH_TODOS});
            const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {params: {_page: page, _limit: limit}});
            dispatch({type: TodoActionTypes.FETCH_TODOS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODOS_ERROR, 
                      payload: "Произошла ошибка при загрузке списка дел"});
        }
    }
} /* (пример использования в UserList.tsx) */

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page};
}