
import { GraphQLNonNull, GraphQLString, GraphQLID } from 'graphql';
import createCategory from '../../services/categoryServices/createCategory';

import { CategoryInputType, CategoryType } from './CategoryTypes';

const addCategoryMutation = {
  type: CategoryType,
  args: {
    data: {
    name: 'data',
    type: new GraphQLNonNull(CategoryInputType)
    }
  },
  resolve: async (_, { data }) => {
    const results = await createCategory(data);
    return results;
  } 
}

export default { addCategoryMutation: addCategoryMutation};