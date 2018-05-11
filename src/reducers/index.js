import {SET_CARDS, SET_RESOURCE} from '../constants/action-types.js';

const initialState = {
  cards: [],
  player: {
      population: 0,
      gold: 0,
  },
};

const rootReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {

    case SET_CARDS:
      if(action.cards.length >= 0){
        return {...state, cards: action.cards };
      } else {
        return state;
      }
      break;

    case SET_RESOURCE:
      switch(action.resource){
        case 'gold':
          return {...state, player: {population: state.player.population, gold: action.value} };

        case 'food':
          return {...state, player: {population: action.value, gold: state.player.gold} };

        default:
          return state;
      }
      break;

    default:
      return state;
  }
};

export default rootReducer;
