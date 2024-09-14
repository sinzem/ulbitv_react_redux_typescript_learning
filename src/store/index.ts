import {applyMiddleware, createStore} from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers";

export const store = createStore<any, any>(rootReducer, applyMiddleware(thunk));