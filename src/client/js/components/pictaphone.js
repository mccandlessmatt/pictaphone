import React from 'react';
import Login from './login';
import Layout from './layout/desktop';
import Home from './home';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from 'store';
import CreateGame from './create-game';
import Archives from './archives';
import Profile from './profile';
import Register from './register';

function checkAuth(nextState, replace) {
  if (!store.get('token')) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

function logout(nextState, replace) {
  store.remove('token');
  checkAuth(nextState, replace);
}

export default ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/login" component={Login} />
      <Route path="/register" component={ Register } />
      <Route path="/logout" onEnter={logout} />
      <Route path="/" component={Layout} onEnter={checkAuth} >
        <IndexRoute component={Home} />
        <Route path="/create" component={ CreateGame } />
        <Route path="/archives" component={ Archives } />
        <Route path="/profile" component={ Profile } />
      </Route>
    </Router>
  </Provider>
);
