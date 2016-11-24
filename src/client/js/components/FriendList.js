import React from 'react';
import FriendItem from 'components/FriendItem';

export default props => (
  <ul>
    {props.friends.map(friend => <FriendItem key={friend.id} {...friend} />)}
  </ul>
);
