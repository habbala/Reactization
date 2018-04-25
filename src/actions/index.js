import {SET_CARDS} from "../constants/action-types";

export const setCards = (cardArr) => ({
  type : SET_CARDS,
  cards: cardArr,
});
