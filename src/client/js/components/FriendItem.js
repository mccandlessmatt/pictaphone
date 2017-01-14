import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default friend => (
  <li>
    <span>{friend.name}</span>
    <DropdownButton title="Actions" bsSize="small">
      <MenuItem onSelect={() => friend.invitePlayer(friend)}>Invite to game</MenuItem>
    </DropdownButton>
  </li>
);
