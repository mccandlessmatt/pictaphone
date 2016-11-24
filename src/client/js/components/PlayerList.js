import React from 'react';

export default props => (
  <ul>
    {props.players.map(player => <li key={player.id}>{player.name}</li>)}
  </ul>
);
