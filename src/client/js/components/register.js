import React from 'react';
import axios from 'axios';

function register({ name, email, password }) {
  axios.post('/register', {
    name, email, password
  }).then(resp => console.log('successfully registered'));
}

export default React.createClass({
  render() {
    return (
      <form>
        <label htmlFor="name">Name</label><br />
        <input id="name" type="text" ref="name" /><br />

        <label htmlFor="email">Email</label><br />
        <input id="email" type="text" ref="email" /><br />

        <label htmlFor="password">Password</label><br />
        <input id="password" type="password" ref="password" /><br />
        <button onClick={ e => {
            e.preventDefault();
            register({
              name: this.refs.name.value,
              email: this.refs.email.value,
              password: this.refs.password.value
            });
        }}>Register</button>
      </form>
    );
  }
});
