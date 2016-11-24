import React from 'react';
import FriendList from '../../components/FriendList';
import PlayerList from '../../components/PlayerList';

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  startCountdown() {
    // redirecting to game for now
    this.context.router.push(`/game/${this.state.key}`);
  },
  render() {
    console.log(PlayerList, FriendList, this.props);
    return (
      <div>
        <PlayerList players={this.props.players} />
        <FriendList friends={this.props.friends} />
      </div>
    );
  }
});
