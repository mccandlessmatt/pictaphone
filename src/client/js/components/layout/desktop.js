import React from 'react'

export default props => (
  <div>
    <header>
      <h1>Pictaphone</h1>
      <nav>
      </nav>
    </header>
    {props.children}
    <footer>
      <p><em>This is the footer</em></p>
    </footer>
  </div>
)
