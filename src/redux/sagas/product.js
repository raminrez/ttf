import { call, put } from "redux-saga/effects";

import { fetchProducts } from "../../api/product";
import { doAddProducts } from "../actions/product";

function* handleFetchProducts() {
  const result = yield call(fetchProducts);
  yield put(doAddProducts(result.data));
}

export { handleFetchProducts };
