import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    AuthorsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      include: [AuthorsModule],
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ headers: (req || { headers: {} }).headers }),
    }),
  ],
})
export class AppModule {}
