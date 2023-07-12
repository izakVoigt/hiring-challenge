import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

export const corsOptions: CorsOptions = {
  origin: '*',
  methods: ['GET', 'OPTIONS', 'POST', 'PUT'],
};
