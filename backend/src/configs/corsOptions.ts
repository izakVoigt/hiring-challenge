import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  methods: ['GET', 'OPTIONS', 'POST', 'PUT'],
  origin: '*',
};
