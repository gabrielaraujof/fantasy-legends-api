import { Query, Resolver } from '@nestjs/graphql';

import { firstValueFrom, map } from 'rxjs';

import { PlayerService, toPlayer } from '../services';
import { Player } from '../domain/player';

@Resolver()
export class PlayerResolver {
  constructor(private readonly playerService: PlayerService) {}

  @Query((returns) => [Player])
  async players() {
    return await firstValueFrom(
      this.playerService.getAll().pipe(map((players) => players.map(toPlayer))),
    );
  }
}
