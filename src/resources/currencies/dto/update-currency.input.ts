import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateCurrencyInput } from './create-currency.input';

@InputType()
export class UpdateCurrencyInput extends PartialType(CreateCurrencyInput) {
  @Field(() => ID)
  id: string;
}
