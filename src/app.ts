import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import { DocumentNode } from "graphql";
import { resolvers as rs } from "./graphql/resolvers";

dotenv.config();
const port = process.env.PORT || 3000;

// TODO: up[date this types]
export async function startApolloServer(
  typeDefs: DocumentNode,
  resolvers: typeof rs
) {
  const app = express();
  const httpServer = http.createServer(app);

  // Here we can add API REST for example
  // app.get('/', (req, res) => res.send("Welcome to the API"))

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );

  console.log(`🚀 Server ready at http://localhost:${port}`);
}
