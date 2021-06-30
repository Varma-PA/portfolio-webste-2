import { combineReducers } from "redux";
import changeColour from "./change-colour-reducer";

const rootReducer = combineReducers({ changeColour });

export default rootReducer;
