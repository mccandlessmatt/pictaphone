import gameService from '../services/game';

export function attachRoutes(app) {
  app
    .route('/game/create')
    .post(gameService.create);
}
