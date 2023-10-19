import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoresModule } from './resources/stores/stores.module';
import { UsersModule } from './resources/users/users.module';
import { CurrenciesModule } from './resources/currencies/currencies.module';
import { CurrencyScalar } from './scalars/currency-code.scalar';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      resolvers: { CurrencyCode: CurrencyScalar },
    }),
    StoresModule,
    UsersModule,
    CurrenciesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
