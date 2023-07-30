import { Field, ID, ObjectType } from '@nestjs/graphql';

import { Team } from './team';

@ObjectType()
export class Player {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  summonerName: string;

  @Field()
  role: string;

  @Field()
  country: string;

  @Field()
  substitute: boolean;

  @Field((type) => Team, { nullable: true })
  team: Team | null;
}
