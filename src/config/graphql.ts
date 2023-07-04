import { registerAs } from '@nestjs/config';

export const graphQLConfig = registerAs('graphql', () => ({
  playgroundEnabled: process.env.GRAPHQL_PLAYGROUND_ENABLED === 'true',
}));
