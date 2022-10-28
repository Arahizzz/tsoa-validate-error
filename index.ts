import Koa from "koa";
import bodyParser from 'koa-bodyparser';
import errorHandler from "./error.js";
import Router from "@koa/router";
import {RegisterRoutes} from './routes.js';

const app = new Koa();
const router = new Router();

app.use(errorHandler);

app.use(bodyParser())

RegisterRoutes(router);
app.use(router.routes());

const port = 3000;
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
  
  