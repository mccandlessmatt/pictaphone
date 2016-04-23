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
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}


export default ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Login} />
        <Route path="test" component={Test} onEnter={checkAuth} />
      </Route>
    </Router>
  </Provider>
);
