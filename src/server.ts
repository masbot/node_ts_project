import http from 'http';
import express from 'express';
import { applyMiddleware, applyRoutes } from './utils';
import routes from './services';
import middleware from './middleware';

const router = express();

applyMiddleware(middleware, router);
applyRoutes(routes, router);

const { PORT = 3000 } = process.env;
const server = http.createServer(router);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
server.listen(PORT, () => console.log(`Server is running http://localhost:${PORT}...`));
