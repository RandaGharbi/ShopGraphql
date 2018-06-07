import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import { ProductsType, ProductType } from './productTypes';
import getProducts from '../../services/productServices/getProducts';

const productsQuery = {
  type: new GraphQLList(ProductType),
  resolve: async () => {
    const products = await getProducts();
    return products;   
  }
}

export { productsQuery }