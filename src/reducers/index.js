import {combineReducers} from 'redux';
import player from './player';
import cards from './cards';

const rootReducer = combineReducers({player, cards});

export default rootReducer;
