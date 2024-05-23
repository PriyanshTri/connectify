import { combineReducers } from "redux";
import { userReducer } from "./user/userReducers";


const rootReducer = combineReducers({
    user: userReducer
  });

  export default rootReducer;