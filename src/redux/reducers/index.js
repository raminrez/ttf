import { combineReducers } from "redux";
import productReducer from "./product";
import cardReducer from "./card";

const rootReducer = combineReducers({
  productState: productReducer,
  cardState: cardReducer
});

export default rootReducer;
