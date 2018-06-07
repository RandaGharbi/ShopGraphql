import { GraphQLObjectType } from 'graphql';

import { productsQuery } from './product/productQueries';
import { categoriesQuery } from './category/categoryQueries';

export default new GraphQLObjectType ({
    name:'Viewer',
    fields: () => ({
        productsQuery,
        categoriesQuery,
        
    })
})