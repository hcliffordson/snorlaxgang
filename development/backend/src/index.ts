import express from 'express';
import { server as gqlServer } from './apollo';
import config from './config';

const app = express();
const port = config.SERVER_PORT;

gqlServer.applyMiddleware({app, path: config.GRAPHQL_PATH});

app.listen({ port }, () => console.log(`Server is running on port ${port}`));
