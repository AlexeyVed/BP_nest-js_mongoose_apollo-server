import { Injectable } from '@nestjs/common';
import { Author } from './models/author.model';

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [
    {
      id: 1,
      firstName: '1 First Name',
      lastName: '1 Last Name',
      // posts: []
    },
    {
      id: 2,
      firstName: '2 First Name',
      lastName: '2 Last Name',
      // posts: []
    },
    {
      id: 3,
      firstName: '3 First Name',
      lastName: '3 Last Name',
      // posts: []
    },
  ];

  findOneById(id: number) {
    return this.authors.find((author) => author.id === id);
  }

  getAll() {
    return this.authors;
  }
}
