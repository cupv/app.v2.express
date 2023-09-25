import { makeExecutableSchema } from "graphql-tools";

import {resolvers as authorResolver} from './resolvers/author.resolver'
import {resolvers as bookResolver} from './resolvers/book.resolver'
import { resolvers as helloResolver } from './resolvers/hello.resolver';

import { typeDef as Author } from './schemas/author.schema';
import { typeDef as Book } from './schemas/book.schema';
import { typeDef as Hello } from './schemas/hello.schema';

import {merge} from 'lodash'

const Query = `
  type Query {
    author(id: Int!): Int
    book(id: Int!): Int
  }
`;

const resolver = {
  Query: {
    author: () => {
      //
    },
    book: () => {
      //
    },
  },
  
};

export const schema = makeExecutableSchema({
  typeDefs: [Author, Book, Hello, Query],
  resolvers: merge(resolver, authorResolver, bookResolver, helloResolver),
});