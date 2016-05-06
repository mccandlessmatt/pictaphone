import React from 'react';
import axios from 'axios';
import store from 'store';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  login({ username, password }) {
    console.log(`password is ${password}, username is ${username}`);
    axios.post('/login', {
      username,
      password
    }).then(resp => this.saveLogin(resp.data));
  },
  saveLogin({ token }) {
    store.set('token', token);
    this.context.router.replace('/');
  },
  render() {
    return (
      <form>
        <label htmlFor="username">Username</label><br />
        <input type="text" id="username" ref="username" /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" ref="password" /><br />
        <button onClick={ e => {
            e.preventDefault();
            this.login({
              username: this.refs.username.value,
              password: this.refs.password.value
            });
        }}>Login</button>
      </form>
    );
  }
});
