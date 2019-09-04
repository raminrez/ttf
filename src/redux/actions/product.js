import { PRODUCT_ADD } from "../constants/actionTypes";

const doAddProducts = products => ({
  type: PRODUCT_ADD,
  products
});

export { doAddProducts };
