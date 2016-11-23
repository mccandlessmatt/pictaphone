import emailService from '../services/email';

export function attachRoutes(app) {
  app
    .route('/email/send')
    .post(emailService);
}
