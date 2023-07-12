import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import express from 'express';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { corsOptions, validationPipeOptions } from './configs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('API_PORT');

  app.enableCors(corsOptions);
  app.useGlobalPipes(new ValidationPipe(validationPipeOptions));
  app.use(express.json());
  app.use(helmet());

  await app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
  });
}
bootstrap();
