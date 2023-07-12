import { ConfigModuleOptions } from '@nestjs/config';
import { validate } from '../utils/validations/envinromentValidation';

const enviroments = () => ({
  nodeEnv: process.env.NODE_ENV,
  port: parseInt(process.env.API_PORT),
  database: {
    uri: process.env.MONGODB_URI,
  },
});

export const configModuleOptions: ConfigModuleOptions = { cache: true, isGlobal: true, load: [enviroments], validate };
