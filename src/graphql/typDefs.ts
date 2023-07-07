import { gql } from "graphql-tag";
import { GraphQLDate } from "graphql-scalars";

export const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
  }

  type Mutation {
    createProject(name: String!, description: String): Project
  }

  type Project {
    uuid: ID
    name: String
    description: String
    createdAt: Date
    updatedAt: Date
  }
`;
