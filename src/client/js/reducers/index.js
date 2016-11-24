import { combineReducers } from 'redux';
import game from 'reducers/gameReducer';
import friends from 'reducers/friendReducer';

export default combineReducers({ game, friends });
