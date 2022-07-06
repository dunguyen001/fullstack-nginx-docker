import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import appRoutes from './modules/app.route'
import { handleError } from './middlewares';
export const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(bodyParser.json());
app.use(cors());
app.use(compression());

app.use('/api', appRoutes);
app.get('*', (req, res) => {
  return res.json(JSON.stringify(req.headers, null, 1))
})
app.use(handleError)