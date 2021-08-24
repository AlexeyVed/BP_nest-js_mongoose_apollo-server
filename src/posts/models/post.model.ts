import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  authorId: number;

  @Field((type) => Int, { nullable: true })
  votes?: number;
}
