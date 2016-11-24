import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import Pictaphone from './pictaphone';
import appReducer from 'reducers';
import initialState from './fixtures';

const pictaphoneNode = document.getElementById('pictaphone');
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<Pictaphone store={store} />, pictaphoneNode);
