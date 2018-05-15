import {SET_CARDS, SET_RESOURCE, SET_CELL} from "../constants/action-types";

export const setCards = (cardArr) => ({
  type : SET_CARDS,
  cards: cardArr,
});

export const setResource = (output) => ({
  type : SET_RESOURCE,
  resource: output.target,
  value: output.value,
});

export const setCell = (newCell) => ({
  type : SET_CELL,
  cell: newCell,
});
