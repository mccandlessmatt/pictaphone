import * as actions from 'actions/friendActions';

export const addFriend = friend => ({
  type: actions.ADD_FRIEND,
  payload: friend
});
