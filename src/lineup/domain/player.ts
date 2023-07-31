import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Player {
  @Field(() => ID)
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

  @Field()
  teamId: string;
}
