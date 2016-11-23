import { createReducer } from 'utils/reducerUtils';
import * as actions from 'actions/gameActions';

const initialState = {
  players: []
};

const actionHandlers = {
  [actions.PLAYER_ADDED](state, action) {
    return {
      ...state,
      players: [...state.players, action.payload.player]
    };
  }
};

export default createReducer(actionHandlers, initialState);
