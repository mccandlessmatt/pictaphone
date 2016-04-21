import React from 'react'
import Login from './login'
import Layout from './layout/desktop'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export default ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Login} />
      </Route>
    </Router>
  </Provider>
);
