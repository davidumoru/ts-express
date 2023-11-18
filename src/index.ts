import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import glowr from 'glowr';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(glowr(`⚡️[server]: Server is running at http://localhost:${port}`, `bg.green`));
});