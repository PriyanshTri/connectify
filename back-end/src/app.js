import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cookieparser from 'cookie-parser';
import bodyParser from 'body-parser'

//Routes imports

import userRouter from '../src/routes/user.routes.js'

dotenv.config({
  path: "./.env",
});

const app = express();
app.use(cors());
app.use(cookieparser());
app.use(bodyParser.json());

//safe routes

app.use('/api/v1/users', userRouter) //userRoutes(register or login)
export { app };
