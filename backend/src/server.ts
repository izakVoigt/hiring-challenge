import { corsOptions } from '@configs/corsOptions';
import { connectDatabase, disconnectDatabase } from '@databases/mongoose';
import { loadAndValidateEnvVariables } from '@utils/loadAndValidateEnvVariables';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const start = async () => {
  try {
    loadAndValidateEnvVariables();

    const app = express();
    const port = Number(process.env.API_PORT);

    await connectDatabase();

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

process.on('beforeExit', async () => {
  await disconnectDatabase();
});

if (require.main === module) {
  start().catch(console.error);
}

export { start };
