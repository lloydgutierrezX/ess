import express, { Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config';

const app = express();

app.use(cors());

app.use(express.json());


// app.use(express.urlencoded({ extended: true }));

// app.use("/", routes);

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello from ESS server',
    route: req.url
  })
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});