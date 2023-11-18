import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/config/modules/student/student.route';

app.use(express.json());
app.use(express.text());
app.use(cors());

// application route
app.use('/api/v1/students', studentRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('server is running');
});

export default app;
