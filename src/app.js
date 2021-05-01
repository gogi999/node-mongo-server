import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import router from './router';
import cors from 'cors';

const app = express();

// parse application/json
app.use(bodyParser.json())
// Helmet helps you secure your Express apps by setting various HTTP headers
app.use(helmet());
app.use(cors());

router(app);

export default app;