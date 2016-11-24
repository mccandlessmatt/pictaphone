import { connect } from 'react-redux';
import CreateGame from 'scenes/create-game';
import * as friendActions from 'actionCreators/friendActions';
import * as gameActions from 'actionCreators/gameActions';

console.log('the create game scene', CreateGame);

const mapStateToProps = (state) => ({
  friends: state.friends,
  players: state.game.players
});

export default connect(mapStateToProps, { ...friendActions, ...gameActions })(CreateGame);
