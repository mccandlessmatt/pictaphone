import { attachRoutes as authentication } from './authentication';
import { attachRoutes as game } from './game';
import { attachRoutes as email } from './email';

export default (app) => {
  authentication(app);
  game(app);
  email(app);
};
