import {SET_CARDS} from '../constants/action-types.js';

const initialState = {
  cards: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CARDS:
      if(action.cards.length >= 0){
        return {...state, posts: action.cards };
      } else {
        return state;
      }
      break;

    default:
      return state;
  }
};

export default rootReducer;
