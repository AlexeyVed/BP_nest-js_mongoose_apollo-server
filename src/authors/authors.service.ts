import { Injectable } from '@nestjs/common';

import { Author } from './models/author.model';
import Authors from './data'
@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = Authors

  findOneById(id: number) {
    return this.authors.find((author) => author.id === id);
  }

  getAll() {
    return this.authors;
  }
}
