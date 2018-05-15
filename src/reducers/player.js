import {SET_RESOURCE, SET_CELL} from '../constants/action-types.js';

const playerReducer = (state = {
  population: 0,
  gold: 0,
  cells: [],
},
action) => {
  switch (action.type) {
    case SET_RESOURCE:
      switch(action.resource){
        case 'gold':
          return {...state, gold: action.value };

        case 'food':
          return {...state, population: action.value};

        default:
          return state;
      }

    case SET_CELL:
      return {...state, cells: action.cells };

    default:
      return state;
  }
};

export default playerReducer;
