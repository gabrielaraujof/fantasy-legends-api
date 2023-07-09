import { Test, TestingModule } from '@nestjs/testing';

import {
  describe,
  beforeEach,
  test,
  expect,
  vitest,
  Vitest,
  Mock,
} from 'vitest';

import { PlayerResolver } from './player.resolver';
import { PlayerService } from '../services';
import { of } from 'rxjs';

const PlayerServiceMock = {
  getAll: vitest.fn(),
};

describe('PlayerResolver', () => {
  let resolver: PlayerResolver;
  let service: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayerResolver,
        { provide: PlayerService, useValue: PlayerServiceMock },
      ],
    }).compile();

    resolver = module.get<PlayerResolver>(PlayerResolver);
    service = module.get<PlayerService>(PlayerService);
  });

  test('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  test('should resolve all players', async () => {
    (service.getAll as Mock).mockReturnValue(
      of([
        {
          id: 'randomUUID',
          createdAt: '2023-07-09T13:05:00.000Z',
          updatedAt: '2023-07-09T13:05:00.000Z',
          firstName: 'Leonardo',
          lastName: 'Souza',
          summonerName: 'Robo',
          role: 'top',
          country: 'BR',
          isSub: false,
          teamId: 'fakeId',
        },
      ]),
    );

    const result = await resolver.players();

    expect(result.length).toEqual(1);
    expect(result[0].summonerName).toBe('Robo');
  });
});
