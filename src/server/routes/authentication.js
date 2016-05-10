import authService from '../services/authentication';

export function attachRoutes(app) {
  app
    .route('/login')
    .post(authService.login);

  app
    .route('/register')
    .post(authService.register);
}
