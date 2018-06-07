import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import ViewerType from './graphql/Viewer';
import ProductsMutation from './graphql/product/productMutations';
import categoryMutations from './graphql/category/categoryMutations';
  const RootQuery = new GraphQLObjectType({
    name: 'Root',
    description: 'The root query type.',
    fields: () => ({
      viewer: {
        type: ViewerType,
        args: {},
        resolve: () => ({}),
      },
    }),
  });
  
  const RootMutations = new GraphQLObjectType({
    name: 'Mutation',
    description: 'The root mutation type.',
    fields: Object.assign(
      {},
      ProductsMutation,
      categoryMutations,
    ),
  });
  
  export default new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutations,
  });