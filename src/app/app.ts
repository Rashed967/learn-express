import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  const number = 10;

  res.send(number);
});

export default app;
