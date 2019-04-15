import express from 'express';
import cors from 'cors';
import { server as gqlServer } from './apollo';
import imageRoute from './routes/image';
import config from './config';

const app = express();
app.use(cors());
const port = config.SERVER_PORT;

gqlServer.applyMiddleware({app, path: config.GRAPHQL_PATH});
app.use('/image', imageRoute);

app.listen({ port }, () => console.log(`Server is running on port ${port}`));
