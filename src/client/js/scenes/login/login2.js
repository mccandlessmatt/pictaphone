import React from 'react';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';

class Login extends React.Component {
  componentDidMount() {
      return this.props.location.query
        ? Login.authenticate(this.props.location.query)
        : Login.showLock();
  }

  static authenticate(params) {
    axios.get(process.env.AUTH0_CALLBACK_URL, { params });
  }

  static showLock() {
    const lock = new Auth0Lock(
      process.env.AUTH0_CLIENT_ID,
      process.env.AUTH0_DOMAIN,
      {
        container: 'login',
        auth: {
          responseType: 'code',
          params: {
            scope: 'openid name email picture'
          }
        }
      });

    lock.show();
  }

  render() {
    return (<div id="login" />);
  }
}

export default Login;
