import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector; /* (для получения состояний нужно типизировать сам хук useSelector, типизируем с помощью встроенного TypedUseSelectorHook и кастомного RootState(тип созданного нами редьюсера)) */
