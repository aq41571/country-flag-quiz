import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: './src/app/api/graphql/schema.graphql',
  documents: './src/app/queries/*.graphql',
  overwrite: true,
  generates: {
    './src/generated/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers', 'typescript-operations', 'typescript-react-apollo'],
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
