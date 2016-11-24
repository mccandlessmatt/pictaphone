import * as actions from 'actions/gameActions';

export const addPlayer = player => ({
  type: actions.ADD_PLAYER,
  payload: player
});
