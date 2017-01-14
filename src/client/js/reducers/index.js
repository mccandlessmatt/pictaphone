import { combineReducers } from 'redux';
import game from 'reducers/gameReducer';
import friends from 'reducers/friendReducer';
import words from 'reducers/wordsReducer';

export default combineReducers({ game, friends, words });
