import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import Pictaphone from './pictaphone';

const pictaphoneNode = document.getElementById('pictaphone');
const store = createStore((state, action) => state, {});

ReactDOM.render(<Pictaphone store={store} />, pictaphoneNode);
