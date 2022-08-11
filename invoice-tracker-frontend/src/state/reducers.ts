import { userReducer } from "./user";
import { combineReducers } from "redux";


export const reducers = combineReducers({
    user: userReducer,

});

export type State = ReturnType<typeof reducers>;

export default reducers;