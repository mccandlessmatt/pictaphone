import React from 'react';
import { Link } from 'react-router';

export default props => (
  <div>
    <header>
      <h1>Pictaphone</h1>
      <nav>
        <Link to="/logout">Logout</Link>
      </nav>
    </header>
    {props.children}
    <footer>
      <p><em>This is the footer</em></p>
    </footer>
  </div>
);
