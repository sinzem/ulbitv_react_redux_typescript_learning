import {UserAction, UserActionTypes} from "../../types/user";
import { Dispatch } from "redux";
import axios from "axios";

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => { /* (типизируем диспетчер встроенным типом, добавляем свой) */
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, 
                      payload: "Произошла ошибка при загрузке пользователей"});
        }
    }
} /* (пример использования в UserList.tsx) */