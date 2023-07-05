import { startApolloServer } from "./app";
import { typeDefs } from "./graphql/typDefs";
import { resolvers } from "./graphql/resolvers";
import prismaDB from "./db";

// prismaDB();

startApolloServer(typeDefs, resolvers);
