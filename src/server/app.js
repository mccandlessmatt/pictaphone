import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import attachRoutes from './routes';
import fallback from 'express-history-api-fallback';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../../webpack.config';
import mongoose from 'mongoose';
import passport from 'passport';
import Auth0Strategy from 'passport-auth0';
import session from 'express-session';


dotenv.config();

mongoose.connect(process.env.dbConnection);
mongoose.connection.once('open', () => {
  console.log(`connected to database at ${process.env.dbConnection}`);
});

console.log(process.env.AUTH0_DOMAIN);

const strategy = new Auth0Strategy({
  domain: process.env.AUTH0_DOMAIN,
  clientID: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  callbackURL: process.env.AUTH0_CALLBACK_URL
}, (accessToken, refreshToken, extraParams, profile, done) => done(null, profile));

passport.use(strategy);

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user, done) => done(null, user));

const app = express();
const root = `${process.cwd()}/dist`;

app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: 'something goes here',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(webpackMiddleware(webpack(webpackConfig)));
app.use(express.static(root));

app.use(fallback('index.html', { root }));

attachRoutes(app);

app.listen(process.env.port);
console.log(`listening on port ${process.env.port}`);
