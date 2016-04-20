import React from 'react'
import Login from './login'
import Layout from './layout/desktop'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'


export default props => (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Login} />
    </Route>
  </Router>
);
