import awsLambdaFastify from '@fastify/aws-lambda';

import { Callback, Context, Handler } from 'aws-lambda';
import createApp from './app.factory';

let server: Handler;

async function bootstrap(): Promise<Handler> {
  const app = await createApp();
  app.init();
  const fastifyApp = app.getHttpAdapter().getInstance();
  return awsLambdaFastify(fastifyApp as any);
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};
