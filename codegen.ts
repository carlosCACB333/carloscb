import { GRAPHCMS_TOKEN, GRAPHCMS_URL } from "./src/utils";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      [GRAPHCMS_URL]: {
        headers: {
          Authorization: `Bearer ${GRAPHCMS_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {

      },
    },
    "src/generated/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
  hooks: {
    afterOneFileWrite: [
      'sed -i -e"s|graphql-request/dist/types.dom|graphql-request/src/types.dom|g"',
    ],
  },
};

export default config;
