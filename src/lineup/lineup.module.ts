import { Module } from '@nestjs/common';

import { PlayerService } from './services/player.service';
import { PlayerResolver } from './resolvers/player.resolver';
import { TeamService } from './services/team.service';
import { TeamLoaderProvider } from './loaders';

@Module({
  providers: [PlayerService, PlayerResolver, TeamService, TeamLoaderProvider],
})
export class LineupModule {}
