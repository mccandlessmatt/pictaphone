import { createReducer } from 'utils/reducerUtils';
import * as actions from 'actions/wordsActions';

const initialState = {
  friends: []
};

const actionHandlers = {
  [actions.ADD_WORD](state, action) {
    return {
      ...state,
      words: [...state.words, action.payload]
    };
  }
};

export default createReducer(actionHandlers, initialState);
