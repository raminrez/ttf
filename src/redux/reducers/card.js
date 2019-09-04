import { CARD_ADD, CARD_REMOVE, CARD_SORT } from "../constants/actionTypes";

const INITIAL_STATE = {};

const applyAddToCard = (state, action) => {
  const { createdAt } = action;
  return {
    ...state,
    [createdAt]: {
      quantity: state[createdAt] ? state[createdAt].quantity + 1 : 1
    }
  };
};

const applyRemoveFromCard = (state, action) => {
  const { createdAt } = action;
  const product = state[createdAt];
  let { quantity } = product;

  if (quantity > 1) {
    product.quantity = quantity - 1;
  } else if (quantity === 1) {
    quantity = undefined;
  } else {
    return state;
  }

  if (quantity) {
    return { ...state, [createdAt]: product };
  } else {
    const { [createdAt]: product, ...nn } = state;
    return nn;
  }
};

function cardReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case CARD_ADD: {
      return applyAddToCard(state, action);
    }
    case CARD_REMOVE: {
      return applyRemoveFromCard(state, action);
    }

    default:
      return state;
  }
}
export default cardReducer;
