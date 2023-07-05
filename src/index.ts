import { startApolloServer } from "./app";
import { typeDefs } from "./graphql/typDefs";
import { resolvers } from "./graphql/resolvers";

startApolloServer(typeDefs, resolvers);
