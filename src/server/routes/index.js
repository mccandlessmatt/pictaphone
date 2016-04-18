import {attachRoutes as authentication} from './authentication'

export default (app) => {
  authentication(app);
}
