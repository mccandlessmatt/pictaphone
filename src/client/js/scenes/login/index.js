import React from 'react';
import axios from 'axios';
import store from 'store';
import { Link } from 'react-router';

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
        <input type="text" id="username" ref={username => this.username = username} /><br />

        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" ref={password => this.password = password} /><br />
        <button onClick={ e => {
            e.preventDefault();
            this.login({
              username: this.username.value,
              password: this.password.value
            });
        }}>Login</button>

        <hr />
        <p><Link to="/register">Register</Link></p>
        <p><Link to="/forgot-password">Forgot Password</Link></p>
      </form>
    );
  }
});
