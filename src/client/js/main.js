import React from 'react';
import ReactDOM from 'react-dom';
import Pictaphone from './components/pictaphone';
import { createStore } from 'redux';

const pictaphoneNode = document.getElementById('pictaphone');
const store = createStore((state, action) => state, {});

ReactDOM.render(<Pictaphone store={store} />, pictaphoneNode);
