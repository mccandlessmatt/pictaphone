import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

export default friend => (
  <li>
    <span>{friend.name}</span>
    <DropdownButton title="Actions" bsSize="small">
      <MenuItem onSelect={() => console.log(`adding ${friend.name}`)}>Invite to game</MenuItem>
    </DropdownButton>
  </li>
);
