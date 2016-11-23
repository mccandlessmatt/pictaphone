import React from 'react';
import Login from 'scenes/login/index.js';
import Layout from 'shared/components/layout/desktop';
import Home from 'scenes/landing';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from 'store';
import CreateGame from 'scenes/create-game';
import Archives from 'scenes/archives';
import Profile from 'scenes/profile';
import Register from 'scenes/register';
import Game from 'scenes/game';

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
        <Route path="game">
          <Route path="create" component={ CreateGame } />
          <Route path=":key" component={ Game } />
        </Route>
        <Route path="/archives" component={ Archives } />
        <Route path="/profile" component={ Profile } />
      </Route>
    </Router>
  </Provider>
);
