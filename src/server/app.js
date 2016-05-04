import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import attachRoutes from './routes'
import expressJWT from 'express-jwt'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../../webpack.config'

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static(`${process.cwd()}/dist`));
app.use(expressJWT({secret: process.env.secret}).unless({path: ['/login']}))

attachRoutes(app);

app.listen(process.env.port);
console.log(`listening on port ${process.env.port}`)
