import React from 'react';
import { Link } from 'react-router';

export default props => (
  <div>
    <h1>Welcome</h1>
    <Link to="/profile">Profile</Link>
    <Link to="/game/create">Create Game</Link>
    <Link to="/archives">Archives</Link>
  </div>
);
