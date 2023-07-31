# pern-apollo - backend

- This project use prisma, graphql-codegen, apollo/server

- client: https://github.com/davidcrc/nextjs-client

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Notes:

- Not implemented "where" on queries and mutations

## Example queries

```graphql
query Projects {
  projects {
    uuid
    name
    description
    updatedAt
    tasks {
      uuid
      title
    }
    description
    createdAt
  }
}
```

```graphql
mutation CreateProject($name: String!, $description: String) {
  createProject(name: $name, description: $description) {
    uuid
    name
    tasks {
      uuid
      title
    }
    description
    createdAt
    updatedAt
  }
}
```

```graphql
query Project($projectId: ID!) {
  project(projectId: $projectId) {
    uuid
    name
    description
    tasks {
      uuid
      title
      projectId
    }
    createdAt
    updatedAt
  }
}
```

```graphql
mutation CreateTask($title: String!, $projectId: ID!) {
  createTask(title: $title, projectId: $projectId) {
    uuid
    title
    projectId
    Project {
      uuid
      name
    }
    createdAt
    updatedAt
  }
}
```

```graphql
mutation UpdateProject($projectId: ID!, $name: String!, $description: String) {
  updateProject(projectId: $projectId, name: $name, description: $description) {
    name
    uuid
    description
  }
}
```

```graphql
mutation DeleteProject($projectId: ID!) {
  deleteProject(projectId: $projectId) {
    name
    uuid
  }
}
```

```graphql
query Tasks {
  tasks {
    uuid
    title
    projectId
    Project {
      uuid
      name
    }
    createdAt
    updatedAt
  }
}
```

```graphql
query Task($taskId: ID!) {
  task(taskId: $taskId) {
    uuid
    title
    projectId
    Project {
      uuid
      name
    }
    createdAt
    updatedAt
  }
}
```

```graphql
mutation DeleteTask($taskId: ID!) {
  deleteTask(taskId: $taskId) {
    uuid
    title
  }
}
```

```graphql
mutation UpdateTask($taskId: ID!, $title: String!, $projectId: ID!) {
  updateTask(taskId: $taskId, title: $title, projectId: $projectId) {
    uuid
    title
    projectId
  }
}
```
