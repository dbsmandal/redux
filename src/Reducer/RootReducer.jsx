import { combineReducers } from "redux";
import { productsReducer } from "./Reducer";

const rootReducer = combineReducers({
  product: productsReducer
});

export default rootReducer;
