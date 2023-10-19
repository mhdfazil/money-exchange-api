import { Field, InputType } from '@nestjs/graphql';
import { GraphQLEmailAddress } from 'graphql-scalars';

@InputType()
export class CreateUserInput {
  name: string;

  @Field(() => GraphQLEmailAddress)
  email: string;

  password: string;
}
