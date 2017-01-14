import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
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
    return (
      <Tabs>
        <Tab eventKey={1} title="Players"><PlayerList players={this.props.players} /></Tab>
        <Tab eventKey={2} title="Friends"><FriendList friends={this.props.friends} invitePlayer={this.props.addPlayer} /></Tab>
      </Tabs>
    );
  }
});
