import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
const app = express();

app.listen(process.env.port);
console.log(`listening on port ${process.env.port}`)
