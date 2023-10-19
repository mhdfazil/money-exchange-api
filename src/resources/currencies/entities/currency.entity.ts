import { Field, ID, ObjectType } from '@nestjs/graphql';
import { GraphQLCountryCode } from 'graphql-scalars';
import { CurrencyScalar } from 'src/scalars/currency-code.scalar';

@ObjectType()
export class Currency {
  @Field(() => ID)
  id: string;

  @Field(() => CurrencyScalar)
  code: string;

  name: string;

  country?: string;

  @Field(() => GraphQLCountryCode)
  countryCode?: string;
}
