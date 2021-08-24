import { Injectable } from '@nestjs/common';
import { Post } from './models/post.model';

@Injectable()
export class PostsService {
  private readonly posts: Post[] = [
    {
      id: 1,
      title: 'Author 1 Title 1',
      authorId: 1,
      votes: 1,
    },
    {
      id: 2,
      title: 'Author 1 Title 2',
      authorId: 1,
      votes: 2,
    },
    {
      id: 3,
      title: 'Author 1 Title 3',
      authorId: 1,
      votes: 3,
    },
    {
      id: 4,
      title: 'Author 2 Title 1',
      authorId: 2,
      votes: 1,
    },
    {
      id: 5,
      title: 'Author 2 Title 2',
      authorId: 2,
      votes: 2,
    },
    {
      id: 6,
      title: 'Author 2 Title 3',
      authorId: 2,
      votes: 3,
    },
    {
      id: 7,
      title: 'Author 3 Title 1',
      authorId: 3,
      votes: 1,
    },
    {
      id: 8,
      title: 'Author 3 Title 2',
      authorId: 3,
      votes: 2,
    },
    {
      id: 9,
      title: 'Author 3 Title 3',
      authorId: 3,
      votes: 3,
    },
  ];

  findOneById(id: number) {
    return this.posts.find((author) => author.id === id);
  }

  findAll({ authorId: id }: { authorId: number }) {
    return this.posts.filter((post) => post.authorId !== id);
  }
}
