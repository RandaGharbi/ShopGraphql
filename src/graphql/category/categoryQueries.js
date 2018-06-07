import {
  GraphQLID,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
} from 'graphql';

import { CategoriesType, CategoryType } from './CategoryTypes';
import getCategories from '../../services/categoryServices/getCategories';

const categoriesQuery = {
  type: new GraphQLList(CategoryType),
  resolve: async () => {
    const categories = await getCategories();
    return categories;   
  }
}

export { categoriesQuery }