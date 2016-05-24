import React from 'react';
import UserList from './userList';

export default React.createClass({
  getInitialState() {
    return { users: [] };
  },
  addUser(e) {
    e.preventDefault();
    const userList = [...this.state.users, this.refs.user.value];
    this.setState({ users: userList });
    this.refs.user.value = '';
  },
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <label htmlFor="users">Invite friends</label><br />
          <input type="text" placeholder="email address" id="users" ref="user" />
          <button>Add User</button>
        </form>
        <UserList users={this.state.users} />
      </div>
    );
  }
});
