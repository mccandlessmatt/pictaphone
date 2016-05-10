import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import attachRoutes from './routes';
import expressJWT from 'express-jwt';
import fallback from 'express-history-api-fallback';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.dbConnection);
mongoose.connection.once('open', () => {
  console.log(`connected to database at ${process.env.dbConnection}`);
});

const app = express();
const root = `${process.cwd()}/dist`;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static(root));
app.use(expressJWT({ secret: process.env.secret })
  .unless({ path: ['/login', '/register'] }));

app.use(fallback('index.html', { root }));

attachRoutes(app);

app.listen(process.env.port);
console.log(`listening on port ${process.env.port}`);
