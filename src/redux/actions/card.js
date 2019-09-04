import { CARD_ADD, CARD_REMOVE } from "../constants/actionTypes";

const doAddToCard = createdAt => ({
  type: CARD_ADD,
  createdAt
});

const doRemoveFromCard = createdAt => ({
  type: CARD_REMOVE,
  createdAt
});

export { doAddToCard, doRemoveFromCard };
