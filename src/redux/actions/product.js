import { PRODUCT_ADD, PRODUCT_FETCH } from "../constants/actionTypes";

const doAddProducts = products => ({
  type: PRODUCT_ADD,
  products: products.items
});

const doFetchProducts = () => ({
  type: PRODUCT_FETCH
});

export { doAddProducts, doFetchProducts };
