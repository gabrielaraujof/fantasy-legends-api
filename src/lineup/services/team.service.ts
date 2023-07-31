import { Injectable, Logger } from '@nestjs/common';

import { Observable, of } from 'rxjs';

import { Team } from '../domain/team';

@Injectable()
export class TeamService {
  private readonly logger = new Logger(TeamService.name);

  getTeamsByBatch(teamIds: string[]): Observable<Team[]> {
    this.logger.debug('called getTeamsByBatch');
    return of<Team[]>(
      [
        {
          id: '1',
          name: 'Loud',
        },
      ].filter((team) => teamIds.includes(team.id)),
    );
  }
}
