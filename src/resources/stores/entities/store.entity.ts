import { Field, Float, ID, ObjectType } from '@nestjs/graphql';
import { GraphQLLocalTime, GraphQLPhoneNumber } from 'graphql-scalars';

@ObjectType()
export class Store {
  @Field(() => ID)
  id: string;

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

  @Field(() => Boolean, { defaultValue: true })
  active?: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}
