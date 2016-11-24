import { createReducer } from 'utils/reducerUtils';
import * as actions from 'actions/friendActions';

const initialState = {
  friends: []
};

const actionHandlers = {
  [actions.ADD_FRIEND](state, action) {
    return {
      ...state,
      friends: [...state.friends, action.payload]
    };
  }
};

export default createReducer(actionHandlers, initialState);
