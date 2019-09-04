import { combineReducers } from "redux";
import productReducer from "./product";

const rootReducer = combineReducers({
  productState: productReducer
});

export default rootReducer;
