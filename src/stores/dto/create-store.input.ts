import { Field, Float, InputType } from '@nestjs/graphql';
import { GraphQLLocalTime } from 'graphql-scalars';

@InputType()
export class CreateStoreInput {
  name: string;

  address: string;

  @Field(() => [Float])
  location: number[];

  @Field(() => GraphQLLocalTime)
  workFrom: string;

  @Field(() => GraphQLLocalTime)
  workTo: string;
}
