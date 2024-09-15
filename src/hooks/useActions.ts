import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import ActionCreators from "../store/action-creators/";

/* (хук для обьединения dispatch и action - после обьединения actions просто вызываем как функции без вызова dispatch) */
export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
}