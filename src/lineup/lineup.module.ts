import { Module } from '@nestjs/common';

import { PlayerService } from './services/player.service';
import { PlayerResolver } from './resolvers/player.resolver';

@Module({
  providers: [PlayerService, PlayerResolver],
})
export class LineupModule {}
