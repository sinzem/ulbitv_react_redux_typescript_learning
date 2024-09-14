import { combineReducers } from "redux";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    user: userReducer,
})

export type RootState = ReturnType<typeof rootReducer>; /* (создаем и экспортируем тип редьюсера, типизируем хук для получения состояний из store(useSelector) в hooks/useTypedSelector) */