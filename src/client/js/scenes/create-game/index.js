import React from 'react';
import UserList from 'shared/components/userList';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    return { users: [], key: '123456' };
  },
  addUser(e) {
    e.preventDefault();
    const userList = [...this.state.users, this.email.value];
    this.setState({ users: userList });
    this.email.value = '';
  },
  startCountdown() {
    // redirecting to game for now
    this.context.router.push(`/game/${this.state.key}`);
  },
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <label htmlFor="users">Invite friends</label><br />
          <input type="text" placeholder="email address" id="users" ref={email => this.email = email} />
          <button>Add User</button>
        </form>
        <UserList users={this.state.users} />
        <button onClick={this.startCountdown}>Start Game</button>
      </div>
    );
  }
});
