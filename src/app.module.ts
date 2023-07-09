import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { graphQLConfig } from '@/config';

import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { LineupModule } from './lineup/lineup.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [graphQLConfig],
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [ConfigModule],
      driver: ApolloDriver,
      useFactory: (config: ConfigType<typeof graphQLConfig>) => ({
        playground: config.playgroundEnabled,
        autoSchemaFile: true,
        sortSchema: true,
      }),
      inject: [graphQLConfig.KEY],
    }),
    LineupModule,
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
