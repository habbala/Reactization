import {SET_CARDS} from '../constants/action-types.js';

const cards = (state = {cards: []}, action) => {
  switch (action.type) {
    case SET_CARDS:
      if(action.cards.length >= 0){
        return {...state, cards: action.cards };
      } else {
        return state;
      }

    default:
      return state;
  }
};

export default cards;
