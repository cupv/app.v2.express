import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => 'Hello, GraphQL World!',
      },
      userName: {
        type: GraphQLString,
        resolve: () => 'CuPV',
      },
    },
  }),
});