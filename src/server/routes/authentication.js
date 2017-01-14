// import authService from '../services/authentication';
import passport from 'passport';

export function attachRoutes(app) {
  /* app
    .route('/login')
    .post(authService.login);

  app
    .route('/register')
    .post(authService.register);
*/
  app
    .route('/callback')
    .get(
      passport.authenticate(
        'auth0',
        { failureRedirect: '/url-if-something-fails' }),
        (req, res) => {
          res
            .writeHead(302, { Location: '/' })
            .end();
        }
    );
}
