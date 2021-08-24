import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthorsService } from './authors.service';
import { PostsService } from 'src/posts/post.service';

@Module({
  providers: [PostsService, AuthorsService, AuthorsResolver],
})
export class AuthorsModule {}
