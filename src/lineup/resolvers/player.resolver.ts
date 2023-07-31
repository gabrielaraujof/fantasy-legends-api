import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';

import { firstValueFrom, map } from 'rxjs';

import { PlayerService, toPlayer } from '../services';
import { Player } from '../domain/player';
import { Team } from '../domain/team';
import { Inject, Logger } from '@nestjs/common';
import { TeamLoaderToken } from '../loaders';
import DataLoader from 'dataloader';

@Resolver(() => Player)
export class PlayerResolver {
  private readonly logger = new Logger(PlayerService.name);

  constructor(
    private readonly playerService: PlayerService,
    @Inject(TeamLoaderToken)
    private readonly teamLoader: DataLoader<string, Team>,
  ) {}

  @Query(() => [Player])
  async players() {
    return await firstValueFrom(
      this.playerService.getAll().pipe(map((players) => players.map(toPlayer))),
    );
  }

  @ResolveField('team', () => Team)
  async getTeam(@Parent() { teamId }: Player) {
    return this.teamLoader.load(teamId);
  }
}
