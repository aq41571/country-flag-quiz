import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/app/api/graphql/schema.graphql',
  overwrite: true,
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        skipTypename: true,
        skipTypeNameForRoot: true,
        withResultType: false,
        enumsAsConst: true,
      },
    },
  },
}

// ts-prune-ignore-next
export default config
