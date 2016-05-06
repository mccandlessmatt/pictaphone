import React from 'react'
import Login from './login'
import Layout from './layout/desktop'
import Test from './test'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from 'store'

function checkAuth (nextState, replace) {
  if (!store.get('token')){
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function logout (nextState, replace) {
  store.remove('token');
  checkAuth(nextState, replace);
}

export default ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/login" component={Login} />
      <Route path="/logout" onEnter={logout} />
      <Route path="/" component={Layout}>
        <IndexRoute component={Test} onEnter={checkAuth} />
      </Route>
    </Router>
  </Provider>
);
