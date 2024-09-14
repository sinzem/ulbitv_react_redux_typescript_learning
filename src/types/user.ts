export interface UserState { /* (типы для начального состояния) */
    users: any[];
    loading: boolean;
    error: null | string;
}

// interface UserAction { /* (типы для action - простой общий, ниже для каждого действия по отдельности) */
//     type: string;
//     payload?: any;
// }

/* (отдельная типизация каждого из action) */
export enum UserActionTypes { /* (перечисление(enum) для названий action - вместо actioncreater, переводим из строки) */
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR"
}
interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUsersSuccessAction {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface FetchUsersErrorAction {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction; /* (составной тип из вышеперечисленных действий, используем при создании редьюсера(reducers/userReducer)) */