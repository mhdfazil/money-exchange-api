import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GraphQLEmailAddress } from 'graphql-scalars';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  name: string;

  @Field(() => GraphQLEmailAddress)
  email: string;

  password: string;

  image?: string;

  createdAt?: Date;

  updatedAt?: Date;
}
