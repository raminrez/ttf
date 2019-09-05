import { CARD_ADD, CARD_REMOVE } from "../constants/actionTypes";

const doAddToCard = payload => ({
  type: CARD_ADD,
  payload
});

const doRemoveFromCard = createdAt => ({
  type: CARD_REMOVE,
  createdAt
});

export { doAddToCard, doRemoveFromCard };
