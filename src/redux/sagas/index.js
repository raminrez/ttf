import { takeEvery, all } from "redux-saga/effects";
import { PRODUCT_FETCH } from "../constants/actionTypes";
import { handleFetchProducts } from "./product";

function* watchAll() {
  yield all([takeEvery(PRODUCT_FETCH, handleFetchProducts)]);
}

export default watchAll;
