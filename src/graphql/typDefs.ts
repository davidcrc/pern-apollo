import { gql } from "graphql-tag";
import { GraphQLDate } from "graphql-scalars";

export const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
    projects: [Project]
    project(projectId: ID!): Project
    task(taskId: ID!): Task
    tasks: [Task]
  }

  type Mutation {
    createProject(name: String!, description: String): Project
    updateProject(projectId: ID!, name: String!, description: String): Project
    deleteProject(projectId: ID!): Project
    createTask(title: String!, projectId: ID!): Task
    updateTask(taskId: ID!, title: String!, projectId: ID!): Task
    deleteTask(taskId: ID!): Task
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
