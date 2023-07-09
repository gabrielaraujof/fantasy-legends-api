import { UUID } from 'crypto';

import { Player } from '@/lineup/domain/player';

type Role = 'top' | 'bottom' | 'jungle' | 'middle' | 'support' | 'coach';

export interface PlayerDto {
  id: UUID;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  summonerName: string;
  role: Role;
  country: string;
  isSub: boolean;
  teamId: string;
}

export const toPlayer = (player: PlayerDto): Player => {
  const { id, firstName, lastName, summonerName, role, country, isSub } =
    player;
  return {
    id,
    firstName,
    lastName,
    summonerName,
    role,
    country,
    substitute: isSub,
    team: null
  };
};
