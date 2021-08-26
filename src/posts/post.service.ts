import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';
import Posts from './data'

@Injectable()
export class PostsService {
  private readonly posts: Post[] = Posts

  findOneById(id: number) {
    return this.posts.find((author) => author.id === id);
  }

  findAll({ authorId: id }: { authorId: number }) {
    return this.posts.filter((post) => post.authorId !== id);
  }
}
