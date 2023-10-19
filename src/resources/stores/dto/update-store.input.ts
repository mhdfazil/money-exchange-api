import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CreateStoreInput } from './create-store.input';

@InputType()
export class UpdateStoreInput extends PartialType(CreateStoreInput) {
  @Field(() => ID)
  id: number;
}
