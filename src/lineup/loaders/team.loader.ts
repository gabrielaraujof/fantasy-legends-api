import { FactoryProvider } from '@nestjs/common';

import { firstValueFrom } from 'rxjs';
import DataLoader from 'dataloader';

import { TeamService } from '../services/team.service';
import { Team } from '../domain/team';

export const TeamLoaderToken = 'TEAM_LOADER';

export const TeamLoaderProvider: FactoryProvider<any> = {
  provide: TeamLoaderToken,
  useFactory: (teams: TeamService) => {
    return new DataLoader<string, Team>((keys: string[]) =>
      firstValueFrom(teams.getTeamsByBatch(keys)),
    );
  },
  inject: [TeamService],
};
