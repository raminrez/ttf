import { PRODUCT_ADD } from "../constants/actionTypes";

const INITIAL_STATE = {
  products: []
};

const applyAddProduct = (state, action) => ({
  products: action.products
});

function productReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PRODUCT_ADD: {
      return applyAddProduct(state, action);
    }

    default:
      return state;
  }
}
export default productReducer;
