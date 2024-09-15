import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoReducer } from "./todoReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
})

export type RootState = ReturnType<typeof rootReducer>; /* (создаем и экспортируем тип редьюсера, типизируем хук для получения состояний из store(useSelector) в hooks/useTypedSelector) */