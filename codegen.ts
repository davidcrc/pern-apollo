import type { CodegenConfig } from "@graphql-codegen/cli";
import { PORT } from "./src/const";

const config: CodegenConfig = {
  overwrite: true,
  schema: `http://localhost:${PORT}/graphql`,
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
      config: {
        contextType: "../context#Context",
        useIndexSignature: true,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
