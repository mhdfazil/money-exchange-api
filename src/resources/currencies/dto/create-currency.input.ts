import { Field, InputType } from '@nestjs/graphql';
import { GraphQLCountryCode } from 'graphql-scalars';
import { CurrencyScalar } from 'src/scalars/currency-code.scalar';

@InputType()
export class CreateCurrencyInput {
  @Field(() => CurrencyScalar)
  code: string;

  name: string;

  country?: string;

  @Field(() => GraphQLCountryCode)
  countryCode?: string;
}
