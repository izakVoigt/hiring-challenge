import { corsOptions } from '@configs/corsOptions';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const start = async () => {
  try {
    const app = express();
    const port = Number(process.env.API_PORT);

    app.use(cors(corsOptions));
    app.use(helmet());
    app.use(express.json());

    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });

    return app;
  } catch (error: unknown) {
    console.error(error);
    process.exit(1);
  }
};

if (require.main === module) {
  start().catch(console.error);
}

export { start };
