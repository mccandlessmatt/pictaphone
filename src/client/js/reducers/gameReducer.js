import { createReducer } from 'utils/reducerUtils';
import * as actions from 'actions/gameActions';

const initialState = {
  players: []
};

const actionHandlers = {
  [actions.ADD_PLAYER](state, action) {
    return {
      ...state,
      players: [...state.players, action.payload]
    };
  }
};

export default createReducer(actionHandlers, initialState);
