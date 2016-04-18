import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import attachRoutes from './routes/index.js'

console.log('attach routes, ',attachRoutes)

dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(express.static(`${process.cwd()}/dist`));
attachRoutes(app);

app.listen(process.env.port);
console.log(`listening on port ${process.env.port}`)
