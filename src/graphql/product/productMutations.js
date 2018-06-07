
import { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLList } from 'graphql';
import createProduct from '../../services/productServices/createProduct';
import getProductBycategory from '../../services/productServices/getProductBycateg';
import { ProductInputType, ProductType, ProductsIds } from './productTypes';

const addProductMutation = {
  type: ProductType,
  args: {
    data: {
    name: 'data',
    type: new GraphQLNonNull(ProductInputType)
    }
  },
  resolve: async (_, { data }) => {
    const results = await createProduct(data);
    return results;
  } 
}

const getProductBycategoryMutation = {
  type: new GraphQLList(ProductType),
  args: {
    data: {
    name: 'data',
    type: new GraphQLList(ProductsIds)
    }
  },
  resolve: async (_, { data }) => {
    const results = await getProductBycategory(data);
    return results;
  } 
}

export default { addProductMutation: addProductMutation, getProductBycategoryMutation: getProductBycategoryMutation};