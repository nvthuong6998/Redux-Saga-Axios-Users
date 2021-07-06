import { combineReducers } from "redux";
import userReducer from "./User/User.reducer";

const rootReducer = combineReducers({
    userReducer
});

export default rootReducer; 