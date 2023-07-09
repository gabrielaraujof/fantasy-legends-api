import { Test, TestingModule } from '@nestjs/testing';

import { describe, beforeEach, test, expect } from 'vitest';

import { PlayerService } from './player.service';
import { firstValueFrom } from 'rxjs';
import { UUID } from 'crypto';

describe('PlayerService', () => {
  let service: PlayerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerService],
    }).compile();

    service = module.get<PlayerService>(PlayerService);
  });

  test('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('should get all the players', async () => {
    const players = await firstValueFrom(service.getAll());

    expect(players.length).toBe(7);
  });

  test('should get one player by id', async () => {
    const player = await firstValueFrom(service.getOne('' as UUID));
    expect(player.summonerName).toBe('Robo');
  });
});
