import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Post } from 'src/posts/models/post.model';
import { PostsService } from 'src/posts/post.service';
import { AuthorsService } from './authors.service';
// import { GetAuthorArgs } from "./dto/get-author-by-name.args";
import { Author } from './models/author.model';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query((returns) => Author, { name: 'author' })
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorsService.findOneById(id);
  }

  @Query((returns) => [Author], { name: 'authors' })
  async getAuthors() {
    return this.authorsService.getAll();
  }

  @ResolveField('posts', (returns) => [Post])
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll({ authorId: id });
  }

  // @Query(returns => Author, { name: 'author' })
  // async getAuthorByName(@Args() args: GetAuthorArgs) {
  // }
}
