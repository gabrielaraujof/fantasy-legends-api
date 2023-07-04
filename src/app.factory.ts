import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { RawServerDefault } from 'fastify';

import { AppModule } from './app.module';

export const createApp = async () => {
  const app = await NestFactory.create<
    NestFastifyApplication<RawServerDefault>
  >(AppModule, new FastifyAdapter());

  return app;
};

export default createApp;
