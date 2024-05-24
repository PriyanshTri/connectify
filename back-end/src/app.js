import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cookieparser from 'cookie-parser';
import bodyParser from 'body-parser'
import { sendEmail } from "./controllers/service.controller.js";
import { ifUserNameExists } from "./controllers/user.controller.js";

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
app.post('/api/v1/signup-verification', sendEmail) 
app.post('/api/v1/users/userValidation', ifUserNameExists) //Calling Controller without routes to avoid redudnat routes.
export { app };
