import { Injectable } from '@nestjs/common';

import { UUID, randomUUID } from 'crypto';
import { Observable, of } from 'rxjs';

import { PlayerDto } from './dtos/player.dto';

@Injectable()
export class PlayerService {
  getAll(): Observable<Array<PlayerDto>> {
    return of([
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Leonardo',
        lastName: 'Souza',
        summonerName: 'Robo',
        role: 'top',
        country: 'BR',
        isSub: false,
        teamId: 'fakeId',
      },
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Park',
        lastName: 'Jong-hoon',
        summonerName: 'Croc',
        role: 'jungle',
        country: 'KR',
        isSub: false,
        teamId: 'fakeId',
      },
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Thiago',
        lastName: 'Sartori',
        summonerName: 'tinowns',
        role: 'middle',
        country: 'BR',
        isSub: false,
        teamId: 'fakeId',
      },
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Moon',
        lastName: 'Geom-su',
        summonerName: 'Route',
        role: 'bottom',
        country: 'KR',
        isSub: false,
        teamId: 'fakeId',
      },
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Denilson',
        lastName: 'Oliveira Gonçalves',
        summonerName: 'Ceos',
        role: 'support',
        country: 'BR',
        isSub: false,
        teamId: 'fakeId',
      },
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Ana',
        lastName: 'Vitória Baetas',
        summonerName: 'Mytka',
        role: 'top',
        country: 'BR',
        isSub: true,
        teamId: 'fakeId',
      },
      {
        id: randomUUID(),
        createdAt: new Date(),
        updatedAt: new Date(),
        firstName: 'Lucas',
        lastName: 'Spínola',
        summonerName: 'BeellzY',
        role: 'coach',
        country: 'BR',
        isSub: false,
        teamId: 'fakeId',
      },
    ]);
  }

  getOne(id: UUID): Observable<PlayerDto> {
    return of({
      id: randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
      firstName: 'Leonardo',
      lastName: 'Souza',
      summonerName: 'Robo',
      role: 'top',
      country: 'BR',
      isSub: false,
      teamId: 'fakeId',
    });
  }
}
