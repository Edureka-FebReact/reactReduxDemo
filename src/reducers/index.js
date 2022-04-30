import { combineReducers } from "redux";
import food from "./food_reducer";

const rootReducer = combineReducers({
  food
});

export default rootReducer;
