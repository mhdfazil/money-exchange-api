import { Field, Float, InputType } from '@nestjs/graphql';
import { GraphQLLocalTime, GraphQLPhoneNumber } from 'graphql-scalars';

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

  @Field(() => GraphQLPhoneNumber)
  contactNo?: string;
}
