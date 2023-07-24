import { gql } from "graphql-tag";
import { GraphQLDate } from "graphql-scalars";

export const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
    projects: [Project]
    tasks: [Task]
  }

  type Mutation {
    createProject(name: String!, description: String): Project
    createTask(title: String!, projectId: ID!): Task
  }

  type Project {
    uuid: ID!
    name: String!
    description: String
    tasks: [Task]
    createdAt: Date!
    updatedAt: Date!
  }

  type Task {
    uuid: ID!
    title: String!
    projectId: ID!
    Project: Project
    createdAt: Date!
    updatedAt: Date!
  }
`;
