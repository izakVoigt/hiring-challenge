import { InternalServerErrorException } from '@nestjs/common';

export const errorHandler = (error: unknown) => {
  console.error(error);
  throw new InternalServerErrorException('Internal server error');
};
